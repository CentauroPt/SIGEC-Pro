/**
 * SIGEC-Pro - Motor de Envio de Notificações por Email no Servidor GitHub
 * alegría-activity, S.L.
 */

const https = require('https');

async function run() {
  console.log('=== SIGEC-Pro GitHub Email Notification Dispatcher ===');

  let payload = {};
  try {
    const eventJson = process.env.EVENT_PAYLOAD || '{}';
    const event = JSON.parse(eventJson);

    if (event.client_payload) {
      payload = event.client_payload;
    } else if (event.inputs) {
      payload = event.inputs;
    } else if (event.issue) {
      const issueBody = event.issue.body || '';
      const match = issueBody.match(/<!-- EMAIL_DISPATCH_PAYLOAD:\s*(\{.*?\})\s*-->/s) ||
                    issueBody.match(/<!-- USER_REGISTRATION_PAYLOAD:\s*(\{.*?\})\s*-->/s);
      if (match) {
        payload = JSON.parse(match[1]);
      } else {
        payload = {
          target_email: 'jmcenturio@alegria-activity.com',
          subject: event.issue.title || '[SIGEC-Pro Alerta] Notificação de Registo',
          user_name: 'Utilizador',
          user_email: 'Não especificado',
          type: 'admin_alert'
        };
      }
    }
  } catch (err) {
    console.warn('Aviso ao ler payload do evento:', err);
  }

  const targetEmail = (payload.target_email || payload.email || payload.user_email || 'jmcenturio@alegria-activity.com').trim();
  const userName = payload.user_name || payload.nome || 'Utilizador';
  const userPin = payload.user_pin || payload.pin || '••••••••';
  const userCargo = payload.user_cargo || payload.cargo || 'Não especificado';
  const userLang = (payload.user_lang || payload.idioma || 'Português').trim();
  const subject = payload.subject || `[SIGEC-Pro] Notificação Oficial para ${userName}`;
  const type = payload.type || 'registration_confirmation';
  const nowStr = new Date().toLocaleString('pt-PT');

  console.log(`Destinatário: ${targetEmail}`);
  console.log(`Utilizador: ${userName} (${userLang})`);
  console.log(`Assunto: ${subject}`);
  console.log(`Tipo: ${type}`);

  // Dicionário Multilíngue Oficial (5 Idiomas)
  const i18nTexts = {
    'Português': {
      titleReg: 'Confirmação de Registo no Sistema SIGEC-Pro',
      introReg: 'O seu registo no sistema SIGEC-Pro foi submetido com sucesso. Seguem abaixo os dados da sua conta:',
      titleAct: 'A sua conta já está ativa no SIGEC-Pro',
      introAct: 'A sua conta de utilizador no sistema SIGEC-Pro foi ativada com sucesso pelo Administrador. Já pode iniciar sessão no programa com o seu Email e Palavra-Passe / PIN.',
      lblNome: 'Nome Completo',
      lblEmail: 'Email de Acesso',
      lblCargo: 'Cargo / Função',
      lblIdioma: 'Idioma de Trabalho',
      lblPin: 'Palavra-Passe / PIN de Acesso',
      lblEstado: 'Estado da Conta',
      lblData: 'Data e Hora',
      statusPending: 'Pendente de Ativação pelo Administrador',
      statusActive: 'Ativo / Aprovado',
      instReg: 'O seu acesso está condicionado à aceitação do administrador do programa. Receberá um novo email assim que a sua conta for ativada.',
      instAct: 'Aceda ao programa SIGEC-Pro e introduza o seu Email e Palavra-Passe para começar a trabalhar.'
    },
    'Español': {
      titleReg: 'Confirmación de Registro en el Sistema SIGEC-Pro',
      introReg: 'Su registro en el sistema SIGEC-Pro se ha completado con éxito. A continuación se detallan los datos de su cuenta:',
      titleAct: 'Su cuenta ya está activa en SIGEC-Pro',
      introAct: 'Su cuenta de usuario en el sistema SIGEC-Pro ha sido activada con éxito por el Administrador. Ya puede iniciar sesión en el programa con su Correo Electrónico y Contraseña / PIN.',
      lblNome: 'Nombre Completo',
      lblEmail: 'Correo Electrónico de Acceso',
      lblCargo: 'Cargo / Función',
      lblIdioma: 'Idioma de Trabajo',
      lblPin: 'Contraseña / PIN de Acceso',
      lblEstado: 'Estado de la Cuenta',
      lblData: 'Fecha y Hora',
      statusPending: 'Pendiente de Activación por el Administrador',
      statusActive: 'Activo / Aprobado',
      instReg: 'Su acceso está condicionado a la aceptación del administrador del programa. Recibirá un nuevo correo electrónico tan pronto como su cuenta sea activada.',
      instAct: 'Acceda al programa SIGEC-Pro e introduzca su Correo Electrónico y Contraseña para comenzar a trabajar.'
    },
    'English': {
      titleReg: 'Registration Confirmation in SIGEC-Pro System',
      introReg: 'Your registration in the SIGEC-Pro system was successfully submitted. Below are your account details:',
      titleAct: 'Your account is now active on SIGEC-Pro',
      introAct: 'Your user account in the SIGEC-Pro system has been successfully activated by the Administrator. You can now log in to the application using your Email and Password / PIN.',
      lblNome: 'Full Name',
      lblEmail: 'Access Email',
      lblCargo: 'Position / Department',
      lblIdioma: 'Working Language',
      lblPin: 'Password / Access PIN',
      lblEstado: 'Account Status',
      lblData: 'Date and Time',
      statusPending: 'Pending Administrator Activation',
      statusActive: 'Active / Approved',
      instReg: 'Your access is subject to acceptance by the system administrator. You will receive an email as soon as your account is activated.',
      instAct: 'Open the SIGEC-Pro application and enter your Email and Password to start working.'
    },
    'Français': {
      titleReg: 'Confirmation d\'Inscription au Système SIGEC-Pro',
      introReg: 'Votre inscription au système SIGEC-Pro a été soumise avec succès. Voici les détails de votre compte :',
      titleAct: 'Votre compte est maintenant actif sur SIGEC-Pro',
      introAct: 'Votre compte d\'utilisateur dans le système SIGEC-Pro a été activé avec succès par l\'Administrateur. Vous pouvez désormais vous connecter à l\'application avec votre Email et Mot de Passe / PIN.',
      lblNome: 'Nom Complet',
      lblEmail: 'Email d\'Accès',
      lblCargo: 'Poste / Fonction',
      lblIdioma: 'Langue de Travail',
      lblPin: 'Mot de Passe / PIN d\'Accès',
      lblEstado: 'Statut du Compte',
      lblData: 'Date et Heure',
      statusPending: 'En Attente d\'Activation par l\'Administrateur',
      statusActive: 'Actif / Approuvé',
      instReg: 'Votre accès est soumis à l\'approbation de l\'administrateur du programme. Vous recevrez un nouvel email dès que votre compte sera activé.',
      instAct: 'Accédez au programme SIGEC-Pro et saisissez votre Email et Mot de Passe pour commencer à travailler.'
    },
    'Polski': {
      titleReg: 'Potwierdzenie Rejestracji w Systemie SIGEC-Pro',
      introReg: 'Twoja rejestracja w systemie SIGEC-Pro została pomyślnie przesłana. Poniżej znajdują się szczegóły Twojego konta:',
      titleAct: 'Twoje konto w SIGEC-Pro jest już aktywne',
      introAct: 'Twoje konto użytkownika w systemie SIGEC-Pro zostało pomyślnie aktywowane przez Administratora. Możesz teraz zalogować się do programu przy użyciu swojego adresu e-mail oraz Hasła / PIN-u.',
      lblNome: 'Imię i Nazwisko',
      lblEmail: 'Email Dostępowy',
      lblCargo: 'Stanowisko / Funkcja',
      lblIdioma: 'Język Roboczy',
      lblPin: 'Hasło / PIN Dostępowy',
      lblEstado: 'Status Konta',
      lblData: 'Data i Godzina',
      statusPending: 'Oczekuje na Aktywację przez Administratora',
      statusActive: 'Aktywny / Zatwierdzony',
      instReg: 'Twój dostęp wymaga zatwierdzenia przez administratora programu. Otrzymasz wiadomość e-mail, gdy Twoje konto zostanie aktywowane.',
      instAct: 'Otwórz program SIGEC-Pro i wpisz swój Email oraz Hasło, aby rozpocząć pracę.'
    }
  };

  const t = i18nTexts[userLang] || i18nTexts['Português'];
  const isActivation = (type === 'account_activated');
  const emailTitle = isActivation ? t.titleAct : t.titleReg;
  const emailIntro = isActivation ? t.introAct : t.introReg;
  const statusText = isActivation ? t.statusActive : t.statusPending;
  const instText = isActivation ? t.instAct : t.instReg;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:24px 12px;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">
          <tr>
            <td style="background:linear-gradient(135deg, #0284c7 0%, #0369a1 100%);padding:24px 28px;text-align:left;">
              <div style="font-size:20px;font-weight:800;color:#ffffff;letter-spacing:0.5px;margin:0;">SIGEC-Pro</div>
              <div style="font-size:12px;color:#bae6fd;margin-top:2px;font-weight:500;">alegría-activity, S.L. &bull; Sistema Integrado de Gestão Comercial</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 28px 20px 28px;">
              <h2 style="margin:0 0 14px 0;font-size:18px;font-weight:700;color:#0f172a;">${emailTitle}</h2>
              <p style="margin:0 0 12px 0;font-size:14px;color:#334155;font-weight:600;">Estimado(a) ${userName},</p>
              <p style="margin:0 0 18px 0;font-size:14px;line-height:1.55;color:#475569;">${emailIntro}</p>

              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:16px 0 20px 0;border-radius:8px;overflow:hidden;border:1px solid #cbd5e1;border-collapse:separate;border-spacing:0;">
                <tr>
                  <td style="padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;font-size:13px;width:38%;">${t.lblNome}</td>
                  <td style="padding:10px 14px;background:#ffffff;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:13.5px;font-weight:600;">${userName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;font-size:13px;">${t.lblEmail}</td>
                  <td style="padding:10px 14px;background:#ffffff;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:13.5px;font-weight:600;">${targetEmail}</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;font-size:13px;">${t.lblPin}</td>
                  <td style="padding:10px 14px;background:#ffffff;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:13.5px;font-family:monospace;font-weight:700;">${userPin}</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;font-size:13px;">${t.lblCargo}</td>
                  <td style="padding:10px 14px;background:#ffffff;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:13.5px;">${userCargo}</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;font-size:13px;">${t.lblIdioma}</td>
                  <td style="padding:10px 14px;background:#ffffff;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:13.5px;">${userLang}</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;font-size:13px;">${t.lblEstado}</td>
                  <td style="padding:10px 14px;background:#ffffff;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:13.5px;">
                    <span style="display:inline-block;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700;background:${isActivation ? '#dcfce7' : '#fef3c7'};color:${isActivation ? '#15803d' : '#b45309'};border:1px solid ${isActivation ? '#86efac' : '#fde68a'};">${statusText}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;background:#f8fafc;color:#475569;font-weight:600;font-size:13px;">${t.lblData}</td>
                  <td style="padding:10px 14px;background:#ffffff;color:#64748b;font-size:12.5px;">${nowStr}</td>
                </tr>
              </table>

              <div style="background:#f0f9ff;border-left:4px solid #0284c7;padding:12px 16px;border-radius:0 8px 8px 0;margin:18px 0 12px 0;">
                <p style="margin:0;font-size:13px;line-height:1.5;color:#0369a1;font-weight:500;">
                  <strong>Informação Importante:</strong><br>${instText}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:18px 28px;border-top:1px solid #e2e8f0;text-align:center;">
              <p style="margin:0 0 4px 0;font-size:12px;color:#64748b;font-weight:600;">alegría-activity, S.L. &bull; SIGEC-Pro</p>
              <p style="margin:0;font-size:11px;color:#94a3b8;">Mensagem automática gerada pelo servidor GitHub.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  const textContent = `
SIGEC-Pro - alegría-activity, S.L.
${subject}

${emailTitle}
Estimado(a) ${userName},
${emailIntro}

- ${t.lblNome}: ${userName}
- ${t.lblEmail}: ${targetEmail}
- ${t.lblPin}: ${userPin}
- ${t.lblCargo}: ${userCargo}
- ${t.lblIdioma}: ${userLang}
- ${t.lblEstado}: ${statusText}
- ${t.lblData}: ${nowStr}

${instText}
  `.trim();

  // ENVIO REAL VIA NODEMAILER (SMTP / GMAIL)
  const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || '';
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || '';
  const smtpHost = process.env.SMTP_HOST || (gmailUser.endsWith('@gmail.com') ? 'smtp.gmail.com' : '');
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const fromAddress = process.env.SMTP_FROM || (gmailUser ? `"SIGEC-Pro | alegría-activity" <${gmailUser}>` : '"SIGEC-Pro" <noreply@alegria-activity.com>');

  let emailSent = false;

  let nodemailer = null;
  try {
    nodemailer = require('nodemailer');
  } catch (e) {
    console.log('Módulo nodemailer não disponível no ambiente atual.');
  }

  if (nodemailer && (gmailUser && gmailPass)) {
    try {
      console.log(`A estabelecer ligação SMTP para ${smtpHost || 'smtp.gmail.com'}:${smtpPort}...`);
      const transportConfig = {
        host: smtpHost || 'smtp.gmail.com',
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: gmailUser,
          pass: gmailPass
        }
      };

      const transporter = nodemailer.createTransport(transportConfig);
      const info = await transporter.sendMail({
        from: fromAddress,
        to: targetEmail,
        subject: subject,
        text: textContent,
        html: htmlContent
      });

      console.log(`✅ [SUCESSO] Email entregue com sucesso para ${targetEmail}! (Message ID: ${info.messageId})`);
      emailSent = true;
    } catch (sendErr) {
      console.error('❌ Erro no envio SMTP via Nodemailer:', sendErr.message);
    }
  }

  if (!emailSent) {
    if (!gmailUser || !gmailPass) {
      console.log('⚠️ [AVISO DE CONFIGURAÇÃO SMTP]:');
      console.log('As credenciais de envio SMTP não estão configuradas nos Secrets do repositório GitHub.');
    }
  }

  console.log('Processamento de notificação concluído.');
}

run().catch(err => {
  console.error('Erro na execução do dispatcher:', err);
  process.exit(1);
});
