/**
 * ====================================================================
 * SIGEC-Pro - MÓDULO DE INTERNACIONALIZAÇÃO E TRADUÇÃO DINÂMICA (i18n)
 * Suporte completo para: Português, Español, English, Français, Polski
 * ====================================================================
 */

const SIGEC_I18N = {
  // --- CHEFIA & CONSULTAS ---
  nav_consultas: { Português: "Consultas", Español: "Consultas", English: "Inquiries", Français: "Consultations", Polski: "Konsultacje" },
  consultas_title: {
    Português: "Consultas & Supervisão Geral",
    Español: "Consultas y Supervisión General",
    English: "Inquiries & General Supervision",
    Français: "Consultations et Supervision Générale",
    Polski: "Konsultacje i Nadzór Ogólny"
  },
  consultas_subtitle: {
    Português: "Visualização e Supervisão de Clientes, Contactos e Projetos por Utilizador Registado",
    Español: "Visualización y Supervisión de Clientes, Contactos y Proyectos por Usuario Registrado",
    English: "Overview and Supervision of Clients, Contacts and Projects by Registered User",
    Français: "Aperçu et Supervision des Clients, Contacts et Projets par Utilisateur Enregistré",
    Polski: "Przegląd i Nadzór nad Klientami, Kontaktami i Projektami według Zarejestrowanego Użytkownika"
  },
  consultas_select_user_label: {
    Português: "Selecionar Utilizador:",
    Español: "Seleccionar Usuario:",
    English: "Select User:",
    Français: "Sélectionner Utilisateur :",
    Polski: "Wybierz Użytkownika:"
  },
  consultas_selected_operator: {
    Português: "Utilizador Selecionado:",
    Español: "Usuario Seleccionado:",
    English: "Selected User:",
    Français: "Utilisateur Sélectionné :",
    Polski: "Wybrany Użytkownik:"
  },
  consultas_quadro1_title: {
    Português: "1. Clientes do Utilizador",
    Español: "1. Clientes del Usuario",
    English: "1. User Clients",
    Français: "1. Clients de l'Utilisateur",
    Polski: "1. Klienci Użytkownika"
  },
  consultas_quadro2_title: {
    Português: "2. Contactos do Utilizador",
    Español: "2. Contactos del Usuario",
    English: "2. User Contacts",
    Français: "2. Contacts de l'Utilisateur",
    Polski: "2. Kontakty Użytkownika"
  },
  consultas_quadro3_title: {
    Português: "3. Projetos do Utilizador",
    Español: "3. Proyectos del Usuario",
    English: "3. User Projects",
    Français: "3. Projets de l'Utilisateur",
    Polski: "3. Projekty Użytkownika"
  },
  profile_chefia_label: {
    Português: "Acesso de Chefia (Separador Consultas)",
    Español: "Acceso de Jefatura (Pestaña Consultas)",
    English: "Management Access (Inquiries Tab)",
    Français: "Accès de Direction (Onglet Consultations)",
    Polski: "Dostęp Kierowniczy (Zakładka Konsultacje)"
  },
  profile_chefia_desc: {
    Português: "(Apenas o Administrador pode ativar. Concede permissão para aceder à página 'Consultas' e visualizar clientes, contactos e projetos de todos os utilizadores).",
    Español: "(Solo el Administrador puede activar. Otorga permiso para acceder a la página 'Consultas' y ver clientes, contactos y proyectos de todos los usuarios).",
    English: "(Only the Administrator can activate. Grants permission to access the 'Inquiries' page and view clients, contacts, and projects of all users).",
    Français: "(Seul l'Administrateur peut activer. Donne l'autorisation d'accéder à la page 'Consultations' et de voir les clients, contacts et projets de tous les utilisateurs).",
    Polski: "(Tylko Administrator może aktywować. Daje uprawnienia dostępu do strony 'Konsultacje' i przeglądania klientów, kontaktów i projektów wszystkich użytkowników)."
  },

  sort_status_label: { Português: "Estado do Projeto", Español: "Estado del Proyecto", English: "Project Status", Français: "Statut du Projet", Polski: "Status Projektu" },
  sort_contacted_label: { Português: "Contactados", Español: "Contactados", English: "Contacted", Français: "Contactés", Polski: "Skontaktowano" },
  sort_contacted_sim: { Português: "Contactados: Sim ➔ Não", Español: "Contactados: Sí ➔ No", English: "Contacted: Yes ➔ No", Français: "Contactés: Oui ➔ Non", Polski: "Skontaktowani: Tak ➔ Nie" },
  sort_contacted_nao: { Português: "Contactados: Não ➔ Sim", Español: "Contactados: No ➔ Sí", English: "Contacted: No ➔ Yes", Français: "Contactés: Non ➔ Oui", Polski: "Skontaktowani: Nie ➔ Tak" },
  sort_contacted_default: { Português: "Ordem Padrão", Español: "Orden Estándar", English: "Default Order", Français: "Ordre Standard", Polski: "Kolejność Domyślna" },
  dash_contact_tracking_title: { Português: "Acompanhamento de Contactos", Español: "Seguimiento de Contactos", English: "Contact Tracking", Français: "Suivi des Contacts", Polski: "Śledzenie Kontaktów" },
  dash_client_tracking_title: { Português: "Acompanhamento de Clientes", Español: "Seguimiento de Clientes", English: "Client Tracking", Français: "Suivi des Clients", Polski: "Śledzenie Klientów" },

  // --- NAVEGAÇÃO & CABEÇALHO ---
  nav_home: { Português: "Menu", Español: "Menú", English: "Menu", Français: "Menu", Polski: "Menu" },
  nav_clients: { Português: "Clientes", Español: "Clientes", English: "Clients", Français: "Clients", Polski: "Klienci" },
  nav_contacts: { Português: "Contactos", Español: "Contactos", English: "Contacts", Français: "Contacts", Polski: "Kontakty" },
  nav_projects: { Português: "Projetos", Español: "Proyectos", English: "Projects", Français: "Projets", Polski: "Projekty" },
  nav_budgets: { Português: "Orçamentos", Español: "Presupuestos", English: "Budgets", Français: "Devis", Polski: "Wyceny" },
  nav_config: { Português: "Configuração", Español: "Configuración", English: "Configuration", Français: "Configuration", Polski: "Konfiguracja" },
  brand_subtitle: {
    Português: "Sistema Integrado de Gestão de Clientes & Projetos",
    Español: "Sistema Integrado de Gestión de Clientes & Proyectos",
    English: "Integrated Customer & Project Management System",
    Français: "Système Intégré de Gestion des Clients et Projets",
    Polski: "Zintegrowany System Zarządzania Klientami i Projektami"
  },
  btn_save_changes: { Português: "Guardar Alterações", Español: "Guardar Cambios", English: "Save Changes", Français: "Enregistrer Modifications", Polski: "Zapisz Zmiany" },
  btn_save_close: { Português: "Guardar e Fechar", Español: "Guardar y Cerrar", English: "Save and Close", Français: "Enregistrer et Fermer", Polski: "Zapisz i Zamknij" },

  // --- PESQUISA GLOBAL ---
  search_category_clients: { Português: "Buscar Clientes", Español: "Buscar Clientes", English: "Search Clients", Français: "Chercher Clients", Polski: "Szukaj Klientów" },
  search_category_contacts: { Português: "Buscar Contactos", Español: "Buscar Contactos", English: "Search Contacts", Français: "Chercher Contacts", Polski: "Szukaj Kontaktów" },
  search_category_projects: { Português: "Buscar Projetos", Español: "Buscar Proyectos", English: "Search Projects", Français: "Chercher Projets", Polski: "Szukaj Projektów" },
  search_placeholder: {
    Português: "Escreva aqui o termo de pesquisa...",
    Español: "Escriba aquí el término de búsqueda...",
    English: "Type search term here...",
    Français: "Écrivez ici le terme de recherche...",
    Polski: "Wpisz tutaj szukany termin..."
  },
  btn_global_search: { Português: "Pesquisar Global", Español: "Búsqueda Global", English: "Global Search", Français: "Recherche Globale", Polski: "Wyszukiwanie Ogólne" },

  // --- INÍCIO DE SESSÃO & AUTO-REGISTO ---
  login_system_title: {
    Português: "Acesso Restrito ao Sistema",
    Español: "Acceso Restringido al Sistema",
    English: "Restricted System Access",
    Français: "Accès Restreint au Système",
    Polski: "Ograniczony Dostęp do Systemu"
  },
  login_system_subtitle: {
    Português: "Por favor, selecione ou insira o seu utilizador e palavra-passe / PIN de segurança para continuar:",
    Español: "Por favor, seleccione o ingrese su usuario y contraseña / PIN de seguridad para continuar:",
    English: "Please select or enter your username and security password / PIN to continue:",
    Français: "Veuillez sélectionner ou saisir votre nom d'utilisateur et mot de passe / PIN de sécurité pour continuer :",
    Polski: "Wybierz lub wprowadź nazwę użytkownika i hasło / PIN bezpieczeństwa, aby kontynuować:"
  },
  login_user_placeholder: {
    Português: "Nome de Utilizador ou Email...",
    Español: "Nombre de Usuario o Correo...",
    English: "Username or Email...",
    Français: "Nom d'Utilisateur ou Email...",
    Polski: "Nazwa Użytkownika lub Email..."
  },
  login_pin_placeholder: {
    Português: "Palavra-Passe de Acesso...",
    Español: "Contraseña de Acceso...",
    English: "Access Password...",
    Français: "Mot de Passe d'Accès...",
    Polski: "Hasło Dostępu..."
  },
  login_password_label: {
    Português: "Palavra-Passe:",
    Español: "Contraseña:",
    English: "Password:",
    Français: "Mot de Passe :",
    Polski: "Hasło:"
  },
  login_btn_enter: { Português: "Entrar no Sistema", Español: "Iniciar Sesión", English: "Log In", Français: "Se Connecter", Polski: "Zaloguj Się" },
  login_register_new: { Português: "Registrar Novo Utilizador", Español: "Registrar Nuevo Usuario", English: "Register New User", Français: "Enregistrer Nouvel Utilisateur", Polski: "Zarejestruj Nowego Użytkownika" },
  reg_title: { Português: "Registo de Novo Utilizador", Español: "Registro de Nuevo Usuario", English: "New User Registration", Français: "Enregistrement Nouvel Utilisateur", Polski: "Rejestracja Nowego Użytkownika" },
  reg_first_name: { Português: "Nome:", Español: "Nombre:", English: "First Name:", Français: "Prénom :", Polski: "Imię:" },
  reg_last_name: { Português: "Apelido:", Español: "Apellidos:", English: "Last Name:", Français: "Nom :", Polski: "Nazwisko:" },
  reg_full_name: { Português: "Nome:", Español: "Nombre:", English: "Name:", Français: "Nom :", Polski: "Imię i Nazwisko:" },
  reg_email: { Português: "Email de Acesso:", Español: "Correo Electrónico:", English: "Access Email:", Français: "Email d'Accès :", Polski: "Email Dostępu:" },
  reg_cargo: { Português: "Cargo / Função:", Español: "Puesto / Cargo:", English: "Position / Role:", Français: "Poste / Fonction :", Polski: "Stanowisko / Rola:" },
  reg_language: { Português: "Idioma:", Español: "Idioma:", English: "Language:", Français: "Langue :", Polski: "Język:" },
  reg_pin: { Português: "Palavra-Passe:", Español: "Contraseña:", English: "Password:", Français: "Mot de Passe :", Polski: "Hasło:" },
  reg_password: { Português: "Palavra-Passe:", Español: "Contraseña:", English: "Password:", Français: "Mot de Passe :", Polski: "Hasło:" },
  reg_confirm_password: { Português: "Repetir a Palavra-Passe:", Español: "Repetir la Contraseña:", English: "Repeat Password:", Français: "Répéter le Mot de Passe :", Polski: "Powtórz Hasło:" },
  reg_password_hint: {
    Português: "(Deve conter entre 8 e 12 caracteres, 1 letra maiúscula, 1 minúscula, 1 número e 1 caráter especial).",
    Español: "(Debe contener entre 8 y 12 caracteres, 1 letra mayúscula, 1 minúscula, 1 número y 1 carácter especial).",
    English: "(Must contain 8 to 12 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character).",
    Français: "(Doit contenir entre 8 et 12 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial).",
    Polski: "(Musi zawierać od 8 do 12 znaków, 1 wielką literę, 1 małą literę, 1 cyfrę i 1 znak specjalny)."
  },
  pwd_mismatch_title: { Português: "Aviso de Segurança", Español: "Aviso de Seguridad", English: "Security Warning", Français: "Avertissement de Sécurité", Polski: "Ostrzeżenie Bezpieczeństwa" },
  pwd_mismatch_msg: {
    Português: "Palavra Passe não coincide, repita a palavra Passe",
    Español: "Palabra Passe no coincide, repita la palabra Passe",
    English: "Password does not match, repeat password",
    Français: "Le mot de passe ne correspond pas, répétez le mot de passe",
    Polski: "Hasło nie jest zgodne, powtórz hasło"
  },
  reg_btn_submit: { Português: "Criar e Guardar Registo", Español: "Crear y Guardar Registro", English: "Create and Save Record", Français: "Créer et Enregistrer", Polski: "Utwórz i Zapisz" },
  reg_btn_back: { Português: "Voltar ao Início de Sessão", Español: "Volver al Inicio de Sesión", English: "Back to Login", Français: "Retour à la Connexion", Polski: "Powtórz do Logowania" },

  // --- FICHA DO UTILIZADOR ---
  profile_title: { Português: "Ficha do Utilizador", Español: "Ficha del Usuario", English: "User Profile", Français: "Fiche de l'Utilisateur", Polski: "Karta Użytkownika" },
  profile_badge_admin: { Português: "Administrador do Sistema", Español: "Administrador del Sistema", English: "System Administrator", Français: "Administrateur Système", Polski: "Administrator Systemu" },
  profile_badge_user: { Português: "Utilizador do Sistema", Español: "Usuario del Sistema", English: "System User", Français: "Utilisateur du Système", Polski: "Użytkownik Systemu" },
  profile_tab_info: { Português: "Dados de Registo & PIN", Español: "Datos de Registro y PIN", English: "Registration Data & PIN", Français: "Données d'Enregistrement et PIN", Polski: "Dane Rejestracyjne i PIN" },
  profile_tab_activity: { Português: "Histórico de Atividade Real", Español: "Historial de Actividad Real", English: "Real Activity History", Français: "Historique d'Activité Réelle", Polski: "Rzeczywista Historia Aktywności" },
  profile_role_access: { Português: "Perfil de Acesso:", Español: "Perfil de Acceso:", English: "Access Level:", Français: "Profil d'Accès :", Polski: "Poziom Dostępu:" },
  profile_role_option_user: { Português: "Utilizador Padrão", Español: "Usuario Estándar", English: "Standard User", Français: "Utilisateur Standard", Polski: "Użytkownik Standardowy" },
  profile_role_option_admin: { Português: "Administrador do Sistema", Español: "Administrador del Sistema", English: "System Administrator", Français: "Administrateur Système", Polski: "Administrator Systemu" },
  profile_active_label: { Português: "Acesso Autorizado / Utilizador Ativo", Español: "Acceso Autorizado / Usuario Activo", English: "Authorized Access / Active User", Français: "Accès Autorisé / Utilisateur Actif", Polski: "Dostęp Autoryzowany / Aktywny Użytkownik" },
  profile_active_desc: {
    Português: "(Cada utilizador fica bloqueado por defeito ao registar. Marque a caixa para autorizar/desbloquear o acesso).",
    Español: "(Cada usuario queda bloqueado por defecto al registrarse. Marque la casilla para autorizar/desbloquear el acceso).",
    English: "(Each user is blocked by default upon registration. Check the box to authorize/unblock access).",
    Français: "(Chaque utilisateur est bloqué par défaut lors de l'enregistrement. Cochez la case pour autoriser/débloquer l'accès).",
    Polski: "(Każdy użytkownik jest domyślnie zablokowany po rejestracji. Zaznacz pole, aby autoryzować/odblokować dostęp)."
  },
  profile_pin_section_title: { Português: "Definição de Palavra-Passe", Español: "Definición de Contraseña", English: "Password Setup", Français: "Définition du Mot de Passe", Polski: "Ustawienie Hasła" },
  profile_pin_section_desc: {
    Português: "Defina a palavra-passe necessária para este utilizador abrir e aceder ao programa (8 a 12 caracteres, maiúscula, minúscula, número e símbolo).",
    Español: "Defina la contraseña necesaria para que este usuario abra y acceda al programa (8 a 12 caracteres, mayúscula, minúscula, número y símbolo).",
    English: "Set the password required for this user to open and access the program (8 to 12 characters, uppercase, lowercase, number, and symbol).",
    Français: "Définissez le mot de passe requis pour que cet utilisateur accède au programme (8 à 12 caractères, majuscule, minuscule, chiffre et symbole).",
    Polski: "Ustaw hasło wymagane dla tego użytkownika do otwarcia programu (od 8 do 12 znaków, wielka litera, mała litera, cyfra i symbol)."
  },
  profile_new_pin_label: { Português: "Nova Palavra-Passe:", Español: "Nueva Contraseña:", English: "New Password:", Français: "Nouveau Mot de Passe :", Polski: "Nowe Hasło:" },
  profile_send_link_email: { Português: "Enviar Link por Email", Español: "Enviar Enlace por Correo", English: "Send Link by Email", Français: "Envoyer Lien par Email", Polski: "Wyślij Link Emailem" },
  btn_save_user_profile: { Português: "Guardar Ficha do Utilizador", Español: "Guardar Ficha del Usuario", English: "Save User Profile", Français: "Enregistrer la Fiche Utilisateur", Polski: "Zapisz Kartę Użytkownika" },
  client_comercial_label: { Português: "Comercial Atribuído *", Español: "Comercial Asignado *", English: "Assigned Sales Rep *", Français: "Commercial Assigné *", Polski: "Przypisany Handlowiec *" },

  // --- BOTÕES E AÇÕES GERAIS ---
  btn_new_client: { Português: "Novo Cliente", Español: "Nuevo Cliente", English: "New Client", Français: "Nouveau Client", Polski: "Nowy Klient" },
  btn_new_contact: { Português: "Novo Contacto", Español: "Nuevo Contacto", English: "New Contact", Français: "Nouveau Contact", Polski: "Nowy Kontakt" },
  btn_new_project: { Português: "Novo Projeto", Español: "Nuevo Proyecto", English: "New Project", Français: "Nouveau Projet", Polski: "Nowy Projekt" },
  btn_new_budget: { Português: "Novo Orçamento", Español: "Nuevo Presupuesto", English: "New Budget", Français: "Nouveau Devis", Polski: "Nowa Wycena" },
  btn_import_excel: { Português: "Importar Excel", Español: "Importar Excel", English: "Import Excel", Français: "Importer Excel", Polski: "Importuj Excel" },
  btn_export_excel: { Português: "Exportar Excel", Español: "Exportar Excel", English: "Export Excel", Français: "Exporter Excel", Polski: "Eksportuj Excel" },
  btn_export_pdf: { Português: "Exportar PDF", Español: "Exportar PDF", English: "Export PDF", Français: "Exporter PDF", Polski: "Eksportuj PDF" },
  btn_print: { Português: "Imprimir", Español: "Imprimir", English: "Print", Français: "Imprimer", Polski: "Drukuj" },
  btn_edit: { Português: "Editar", Español: "Editar", English: "Edit", Français: "Modifier", Polski: "Edytuj" },
  btn_delete: { Português: "Eliminar", Español: "Eliminar", English: "Delete", Français: "Supprimer", Polski: "Usuń" },
  btn_view: { Português: "Ver Ficha", Español: "Ver Ficha", English: "View Profile", Français: "Voir Fiche", Polski: "Zobacz Kartę" },
  btn_cancel: { Português: "Cancelar", Español: "Cancelar", English: "Cancel", Français: "Annuler", Polski: "Anuluj" },
  btn_close: { Português: "Fechar", Español: "Cerrar", English: "Close", Français: "Fermer", Polski: "Zamknij" },
  btn_save: { Português: "Guardar", Español: "Guardar", English: "Save", Français: "Enregistrer", Polski: "Zapisz" },

  // --- ORÇAMENTAÇÃO & ESPECIFICAÇÃO TÉCNICA ---
  budget_main_heading: {
    Português: "Orçamentação e Especificação Técnica",
    Español: "Presupuestación y Especificación Técnica",
    English: "Budgeting and Technical Specifications",
    Français: "Budgétisation et Spécifications Techniques",
    Polski: "Wycena i Specyfikacja Techniczna"
  },
  budget_main_subtitle: {
    Português: "Especificação detalhada de componentes e proposta comercial",
    Español: "Especificación detallada de componentes y propuesta comercial",
    English: "Detailed specification of components and commercial proposal",
    Français: "Spécification détaillée des composants et proposition commerciale",
    Polski: "Szczegółowa specyfikacja komponentów i propozycja handlowa"
  },
  budget_model_base_label: {
    Português: "Modelo Base:",
    Español: "Modelo Base:",
    English: "Base Model:",
    Français: "Modèle de Base :",
    Polski: "Model Bazowy:"
  },
  budget_model_base_placeholder: {
    Português: "Escreva ou selecione um modelo/orçamento...",
    Español: "Escriba o seleccione un modelo/presupuesto...",
    English: "Type or select a model/budget...",
    Français: "Écrivez ou sélectionnez un modèle/devis...",
    Polski: "Wpisz lub wybierz model/wycenę..."
  },
  budget_grand_total_label: {
    Português: "Total Geral:",
    Español: "Total General:",
    English: "Grand Total:",
    Français: "Total Général :",
    Polski: "Suma Całkowita:"
  },
  budget_num_label: {
    Português: "Nº:",
    Español: "N.º:",
    English: "No.:",
    Français: "N° :",
    Polski: "Nr:"
  },
  budget_client_label: {
    Português: "Cliente *",
    Español: "Cliente *",
    English: "Client *",
    Français: "Client *",
    Polski: "Klient *"
  },
  budget_client_placeholder: {
    Português: "Selecione ou introduza o Cliente...",
    Español: "Seleccione o introduzca el Cliente...",
    English: "Select or enter Client...",
    Français: "Sélectionnez ou saisissez le Client...",
    Polski: "Wybierz lub wprowadź Klienta..."
  },
  budget_ref_label: {
    Português: "Referência do Orçamento / Projeto",
    Español: "Referencia del Presupuesto / Proyecto",
    English: "Budget / Project Reference",
    Français: "Référence du Devis / Projet",
    Polski: "Referencja Wyceny / Projektu"
  },
  budget_date_label: {
    Português: "Data da Proposta",
    Español: "Fecha de la Propuesta",
    English: "Proposal Date",
    Français: "Date de la Proposition",
    Polski: "Data Oferty"
  },
  budget_images_title: {
    Português: "Imagens e Plantas Técnicas da Proposta",
    Español: "Imágenes y Planos Técnicos de la Propuesta",
    English: "Proposal Images and Technical Plans",
    Français: "Images et Plans Techniques de la Proposition",
    Polski: "Zdjęcia i Rysunki Techniczne Oferty"
  },
  budget_images_subtitle: {
    Português: "Insira ou substitua as imagens nos pontos oficiais da proposta (Logótipo, Fotos Exteriores, Veículo Base, Planta 2D, Mobiliário, Starlink, Elétrico, Gerador, ISO)",
    Español: "Inserte o reemplace las imágenes en los puntos oficiales de la propuesta (Logotipo, Fotos Exteriores, Vehículo Base, Plano 2D, Mobiliario, Starlink, Eléctrico, Generador, ISO)",
    English: "Insert or replace images in the proposal's official points (Logo, Exterior Photos, Base Vehicle, 2D Plan, Furniture, Starlink, Electrical, Generator, ISO)",
    Français: "Insérez ou remplacez les images dans les points officiels de la proposition (Logo, Photos Extérieures, Véhicule de Base, Plan 2D, Mobilier, Starlink, Électrique, Groupe Électrogène, ISO)",
    Polski: "Wstaw lub zmień zdjęcia w oficjalnych punktach oferty (Logo, Zdjęcia Zewnętrzne, Pojazd Bazowy, Rzut 2D, Meble, Starlink, Elektryka, Generator, ISO)"
  },
  budget_th_item: {
    Português: "Item / Componente",
    Español: "Ítem / Componente",
    English: "Item / Component",
    Français: "Article / Composant",
    Polski: "Pozycja / Komponent"
  },
  budget_th_desc_tech: {
    Português: "Descrição / Especificação Técnica",
    Español: "Descripción / Especificación Técnica",
    English: "Description / Technical Specification",
    Français: "Description / Spécification Technique",
    Polski: "Opis / Specyfikacja Techniczna"
  },
  budget_th_price: {
    Português: "Preço (€)",
    Español: "Precio (€)",
    English: "Price (€)",
    Français: "Prix (€)",
    Polski: "Cena (€)"
  },
  budget_th_opt_item: {
    Português: "Item / Componente Opcional",
    Español: "Ítem / Componente Opcional",
    English: "Optional Item / Component",
    Français: "Article / Composant Optionnel",
    Polski: "Opcjonalna Pozycja / Komponent"
  },
  budget_th_opt_price: {
    Português: "Preço Opcional (€)",
    Español: "Precio Opcional (€)",
    English: "Optional Price (€)",
    Français: "Prix Optionnel (€)",
    Polski: "Cena Opcjonalna (€)"
  },
  budget_btn_add_chapter: {
    Português: "Adicionar Mais um Quadro / Capítulo",
    Español: "Añadir Otra Tabla / Capítulo",
    English: "Add Another Section / Chapter",
    Français: "Ajouter un Tableau / Chapitre",
    Polski: "Dodaj Kolejną Sekcję / Rozdział"
  },
  budget_btn_add_row: {
    Português: "Adicionar Linha",
    Español: "Añadir Línea",
    English: "Add Row",
    Français: "Ajouter une Ligne",
    Polski: "Dodaj Wiersz"
  },
  budget_btn_del_chapter: {
    Português: "Eliminar Capítulo",
    Español: "Eliminar Capítulo",
    English: "Delete Chapter",
    Français: "Supprimer le Chapitre",
    Polski: "Usuń Rozdział"
  },
  budget_btn_del_row: {
    Português: "Remover este campo",
    Español: "Eliminar este campo",
    English: "Remove this field",
    Français: "Supprimer ce champ",
    Polski: "Usuń to pole"
  },
  budget_chapter_prefix: {
    Português: "CAPÍTULO",
    Español: "CAPÍTULO",
    English: "CHAPTER",
    Français: "CHAPITRE",
    Polski: "ROZDZIAŁ"
  },
  budget_additional_spec: {
    Português: "ESPECIFICAÇÃO ADICIONAL",
    Español: "ESPECIFICACIÓN ADICIONAL",
    English: "ADDITIONAL SPECIFICATION",
    Français: "SPÉCIFICATION SUPPLÉMENTAIRE",
    Polski: "DODATKOWA SPECYFIKACJA"
  },
  budget_placeholder_new_chapter: {
    Português: "TÍTULO DO NOVO CAPÍTULO...",
    Español: "TÍTULO DEL NUEVO CAPÍTULO...",
    English: "TITLE OF NEW CHAPTER...",
    Français: "TITRE DU NOUVEAU CHAPITRE...",
    Polski: "TYTUŁ NOWEGO ROZDZIAŁU..."
  },
  budget_history_title: {
    Português: "Histórico de Orçamentos Guardados (Independentes)",
    Español: "Historial de Presupuestos Guardados (Independientes)",
    English: "Saved Budgets History (Independent)",
    Français: "Historique des Devis Enregistrés (Indépendants)",
    Polski: "Historia Zapisanych Wycen (Niezależne)"
  },
  budget_btn_print_pdf: {
    Português: "Imprimir / Exportar em PDF",
    Español: "Imprimir / Exportar a PDF",
    English: "Print / Export to PDF",
    Français: "Imprimer / Exporter en PDF",
    Polski: "Drukuj / Eksportuj do PDF"
  },
  budget_btn_export_word: {
    Português: "Exportar para Microsoft Word (.doc)",
    Español: "Exportar a Microsoft Word (.doc)",
    English: "Export to Microsoft Word (.doc)",
    Français: "Exporter vers Microsoft Word (.doc)",
    Polski: "Eksportuj do Microsoft Word (.doc)"
  },
  budget_btn_save: {
    Português: "Guardar Orçamento",
    Español: "Guardar Presupuesto",
    English: "Save Budget",
    Français: "Enregistrer le Devis",
    Polski: "Zapisz Wycenę"
  },
  budget_btn_duplicate: {
    Português: "Duplicar Orçamento Atual",
    Español: "Duplicar Presupuesto Actual",
    English: "Duplicate Current Budget",
    Français: "Dupliquer le Devis Actuel",
    Polski: "Duplikuj Bieżącą Wycenę"
  },
  budget_btn_clear: {
    Português: "Limpar todos os campos",
    Español: "Limpiar todos los campos",
    English: "Clear all fields",
    Français: "Effacer tous les champs",
    Polski: "Wyczyść wszystkie pola"
  },

  // --- CABEÇALHOS DE TABELAS & TERMOS COMUNS ---
  th_name: { Português: "Nome", Español: "Nombre", English: "Name", Français: "Nom", Polski: "Nazwa" },
  th_client: { Português: "Cliente", Español: "Cliente", English: "Client", Français: "Client", Polski: "Klient" },
  th_contact: { Português: "Contacto", Español: "Contacto", English: "Contact", Français: "Contact", Polski: "Kontakt" },
  th_project: { Português: "Projeto", Español: "Proyecto", English: "Project", Français: "Projet", Polski: "Projekt" },
  th_status: { Português: "Estado", Español: "Estado", English: "Status", Français: "Statut", Polski: "Status" },
  th_sector: { Português: "Setor", Español: "Sector", English: "Sector", Français: "Secteur", Polski: "Sektor" },
  th_phone: { Português: "Telefone", Español: "Teléfono", English: "Phone", Français: "Téléphone", Polski: "Telefon" },
  th_email: { Português: "Email", Español: "Correo Electrónico", English: "Email", Français: "Email", Polski: "Email" },
  th_actions: { Português: "Ações", Español: "Acciones", English: "Actions", Français: "Actions", Polski: "Akcje" },
  th_date: { Português: "Data", Español: "Fecha", English: "Date", Français: "Date", Polski: "Data" },
  th_user: { Português: "Utilizador", Español: "Usuario", English: "User", Français: "Utilisateur", Polski: "Użytkownik" },
  th_role: { Português: "Cargo", Español: "Puesto", English: "Position", Français: "Poste", Polski: "Stanowisko" },
  th_language: { Português: "Idioma", Español: "Idioma", English: "Language", Français: "Langue", Polski: "Język" },
  th_total_value: { Português: "Valor Total", Español: "Valor Total", English: "Total Value", Français: "Valeur Totale", Polski: "Wartość Całkowita" },

  // --- FILTROS DE CLIENTES & CONTACTOS ---
  filter_all: { Português: "Todos", Español: "Todos", English: "All", Français: "Tous", Polski: "Wszystkie" },
  filter_active: { Português: "Ativos", Español: "Activos", English: "Active", Français: "Actifs", Polski: "Aktywni" },
  filter_inactive: { Português: "Inativos", Español: "Inactivos", English: "Inactive", Français: "Inactifs", Polski: "Nieaktywni" },

  // --- CONFIGURAÇÃO & GESTÃO ---
  config_tab_users: { Português: "Gestão de Utilizadores", Español: "Gestión de Usuarios", English: "User Management", Français: "Gestion des Utilisateurs", Polski: "Zarządzanie Użytkownikami" },
  config_tab_duplicates: { Português: "Gestão de Duplicados", Español: "Gestión de Duplicados", English: "Duplicates Management", Français: "Gestion des Doublons", Polski: "Zarządzanie Duplikatami" },
  config_tab_database: { Português: "Base de Dados & Backup", Español: "Base de Datos y Copias", English: "Database & Backup", Français: "Base de Données & Sauvegarde", Polski: "Baza Danych i Kopia" },
  config_tab_updates: { Português: "Atualização de Software", Español: "Actualización de Software", English: "Software Update", Français: "Mise à Jour Logicielle", Polski: "Aktualizacja Oprogramowania" },
  config_tab_history: { Português: "Histórico de Atividade", Español: "Historial de Actividad", English: "Activity History", Français: "Historique d'Activité", Polski: "Historia Aktywności" },

  // --- MENSAGENS, TOASTS & ALERTAS ---
  toast_welcome: {
    Português: "Acesso autorizado! Bem-vindo(a), {name}.",
    Español: "¡Acceso autorizado! Bienvenido(a), {name}.",
    English: "Access authorized! Welcome, {name}.",
    Français: "Accès autorisé ! Bienvenue, {name}.",
    Polski: "Dostęp autoryzowany! Witaj, {name}."
  },
  toast_invalid_pin: {
    Português: "Utilizador ou PIN incorreto!",
    Español: "¡Usuario o PIN incorrecto!",
    English: "Incorrect Username or PIN!",
    Français: "Utilisateur ou PIN incorrect !",
    Polski: "Nieprawidłowy Użytkownik lub PIN!"
  },
  toast_user_blocked: {
    Português: "O acesso deste utilizador está bloqueado pelo Administrador.",
    Español: "El acceso de este usuario está bloqueado por el Administrador.",
    English: "This user's access is blocked by the Administrator.",
    Français: "L'accès de cet utilisateur est bloqué par l'Administrateur.",
    Polski: "Dostęp tego użytkownika jest zablokowany przez Administratora."
  },
  toast_saved_success: {
    Português: "Alterações guardadas com sucesso!",
    Español: "¡Cambios guardados con éxito!",
    English: "Changes saved successfully!",
    Français: "Modifications enregistrées avec succès !",
    Polski: "Zmiany zostały pomyślnie zapisane!"
  },
  toast_profile_updated: {
    Português: "Ficha do utilizador atualizada com sucesso!",
    Español: "¡Ficha del usuario actualizada con éxito!",
    English: "User profile updated successfully!",
    Français: "Fiche de l'utilisateur mise à jour avec succès !",
    Polski: "Karta użytkownika zaktualizowana pomyślnie!"
  },
  toast_user_registered: {
    Português: "Novo utilizador registado com sucesso! Acesso pendente de autorização pelo Administrador.",
    Español: "¡Nuevo usuario registrado con éxito! Acceso pendiente de autorización por el Administrador.",
    English: "New user registered successfully! Access pending Administrator authorization.",
    Français: "Nouvel utilisateur enregistré avec succès ! Accès en attente d'autorisation de l'Administrateur.",
    Polski: "Nowy użytkownik zarejestrowany pomyślnie! Dostęp oczekuje na autoryzację Administratora."
  }
};

/**
 * DICIONÁRIO GLOBAL DE FRASES E PADRÕES DE INTERFACE
 * Permite a tradução automática e profunda de qualquer texto estático ou dinâmico
 */
const SIGEC_PHRASES_MAP = {
  "Em Aberto": {"Português":"Em Aberto","Español":"En Abierto","English":"Open","Français":"Ouvert","Polski":"Otwarte"},
  "Em Estudo": {"Português":"Em Estudo","Español":"En Estudio","English":"Under Study","Français":"À l'étude","Polski":"W trakcie analizy"},
  "Aguarda Orçamento": {"Português":"Aguarda Orçamento","Español":"Pendiente Presupuesto","English":"Pending Budget","Français":"En attente de devis","Polski":"Oczekuje na wycenę"},
  "Aguarda Decisão": {"Português":"Aguarda Decisão","Español":"Pendiente Decisión","English":"Pending Decision","Français":"En attente de décision","Polski":"Oczekuje na decyzję"},
  "Em Produção": {"Português":"Em Produção","Español":"En Producción","English":"In Production","Français":"En production","Polski":"W produkcji"},
  "Em Curso": {"Português":"Em Curso","Español":"En Curso","English":"In Progress","Français":"En cours","Polski":"W toku"},
  "Concluído": {"Português":"Concluído","Español":"Concluido","English":"Completed","Français":"Terminé","Polski":"Zakończony"},
  "Entregue": {"Português":"Entregue","Español":"Entregado","English":"Delivered","Français":"Livré","Polski":"Dostarczony"},
  "Cancelado": {"Português":"Cancelado","Español":"Cancelado","English":"Cancelled","Français":"Annulé","Polski":"Anulowany"},
  "Suspenso": {"Português":"Suspenso","Español":"Suspendido","English":"Suspended","Français":"Suspendu","Polski":"Zawieszony"},
  "Privado": {"Português":"Privado","Español":"Privado","English":"Private","Français":"Privé","Polski":"Prywatny"},
  "Fundação": {"Português":"Fundação","Español":"Fundación","English":"Foundation","Français":"Fondation","Polski":"Fundacja"},
  "Estatal": {"Português":"Estatal","Español":"Estatal","English":"State / Public","Français":"Étatique","Polski":"Państwowy"},
  "Público": {"Português":"Público","Español":"Público","English":"Public","Français":"Public","Polski":"Publiczny"},
  "Governamental": {"Português":"Governamental","Español":"Gubernamental","English":"Governmental","Français":"Gouvernemental","Polski":"Rządowy"},
  "Camião": {"Português":"Camião","Español":"Camión","English":"Truck","Français":"Camion","Polski":"Ciężarówka"},
  "Furgão": {"Português":"Furgão","Español":"Furgoneta","English":"Van","Français":"Fourgon","Polski":"Furgonetka"},
  "Smartbus": {"Português":"Smartbus","Español":"Smartbus","English":"Smartbus","Français":"Smartbus","Polski":"Smartbus"},
  "Semirreboque": {"Português":"Semirreboque","Español":"Semirremolque","English":"Semi-trailer","Français":"Semi-remorque","Polski":"Naczepa"},
  "Unidade à Medida": {"Português":"Unidade à Medida","Español":"Unidad a Medida","English":"Custom Unit","Français":"Unité sur mesure","Polski":"Jednostka na zamówienie"},
  "Portugal": {"Português":"Portugal","Español":"Portugal","English":"Portugal","Français":"Portugal","Polski":"Portugalia"},
  "Espanha": {"Português":"Espanha","Español":"España","English":"Spain","Français":"Espagne","Polski":"Hiszpania"},
  "França": {"Português":"França","Español":"Francia","English":"France","Français":"France","Polski":"Francja"},
  "Polónia": {"Português":"Polónia","Español":"Polonia","English":"Poland","Français":"Pologne","Polski":"Polska"},
  "Reino Unido": {"Português":"Reino Unido","Español":"Reino Unido","English":"United Kingdom","Français":"Royaume-Uni","Polski":"Wielka Brytania"},
  "Alemanha": {"Português":"Alemanha","Español":"Alemania","English":"Germany","Français":"Allemagne","Polski":"Niemcy"},
  "Itália": {"Português":"Itália","Español":"Italia","English":"Italy","Français":"Italie","Polski":"Włochy"},
  "Sim": {"Português":"Sim","Español":"Sí","English":"Yes","Français":"Oui","Polski":"Tak"},
  "Não": {"Português":"Não","Español":"No","English":"No","Français":"Non","Polski":"Nie"},
  "Administrador do Sistema": {"Português":"Administrador do Sistema","Español":"Administrador del Sistema","English":"System Administrator","Français":"Administrateur Système","Polski":"Administrator Systemu"},
  "Perfil de Chefia": {"Português":"Perfil de Chefia","Español":"Perfil de Jefatura","English":"Manager Profile","Français":"Profil de Direction","Polski":"Profil Kierowniczy"},
  "Utilizador Comercial": {"Português":"Utilizador Comercial","Español":"Usuario Comercial","English":"Commercial User","Français":"Utilisateur Commercial","Polski":"Użytkownik Handlowy"},

  "Carregar Orçamento": { Español: "Cargar Presupuesto", English: "Upload Quote", Français: "Charger Devis", Polski: "Wczytaj Wycenę" },
  "Criar Orçamento": { Español: "Crear Presupuesto", English: "Create Quote", Français: "Créer Devis", Polski: "Utwórz Wycenę" },

  "Manter Todos": { Español: "Mantener Todos", English: "Keep All", Français: "Conserver Tous", Polski: "Zachowaj Wszystkie" },
  "Confirmar: Manter Todos": { Español: "Confirmar: Mantener Todos", English: "Confirm: Keep All", Français: "Confirmer : Conserver Tous", Polski: "Potwierdź: Zachowaj Wszystkie" },

  "Estado do Orçamento": { Español: "Estado del Presupuesto", English: "Budget Status", Français: "État du Devis", Polski: "Status Wyceny" },
  "Em avaliação": { Español: "En evaluación", English: "Under evaluation", Français: "En cours d'évaluation", Polski: "W trakcie oceny" },
  "Adjudicado": { Español: "Adjudicado", English: "Awarded", Français: "Attribué", Polski: "Przyznane" },
  "Não Adjudicado": { Español: "No Adjudicado", English: "Not Awarded", Français: "Non Attribué", Polski: "Nieprzyznane" },

  "Contactado": { Español: "Contactado", English: "Contacted", Français: "Contacté", Polski: "Skontaktowano" },
  "Não Contactado": { Español: "No Contactado", English: "Not Contacted", Français: "Non Contacté", Polski: "Nie Skontaktowano" },

  "Contacto Contactado (possui registo de contactos realizados)": { Español: "Contacto Contactado (tiene registro de contactos realizados)", English: "Contacted Contact (has record of contacts made)", Français: "Contact Contacté (possède un historique de contacts)", Polski: "Kontakt Skontaktowany (posiada historię kontaktów)" },
  "Não Contactado (sem registo de contactos realizados)": { Español: "No Contactado (sin registro de contactos realizados)", English: "Not Contacted (no record of contacts made)", Français: "Non Contacté (aucun historique de contacts)", Polski: "Nie Skontaktowano (brak historii kontaktów)" },
  "Sim": { Español: "Sí", English: "Yes", Français: "Oui", Polski: "Tak" },
  "Não": { Español: "No", English: "No", Français: "Non", Polski: "Nie" },

  // Botões, Secções e Dropzones de Fichas (Clientes, Contactos, Projetos)
  "Carregar Ficheiros": { Español: "Subir Archivos", English: "Upload Files", Français: "Télécharger des Fichiers", Polski: "Wgraj Pliki" },
  "Criar Orçamento": { Español: "Crear Presupuesto", English: "Create Budget", Français: "Créer un Devis", Polski: "Utwórz Wycenę" },
  "Adicionar Projeto": { Español: "Añadir Proyecto", English: "Add Project", Français: "Ajouter un Projet", Polski: "Dodaj Projekt" },
  "Fechar Ficha": { Español: "Cerrar Ficha", English: "Close Profile", Français: "Fermer la Fiche", Polski: "Zamknij Kartę" },
  "Guardar Alterações": { Español: "Guardar Cambios", English: "Save Changes", Français: "Enregistrer les Modifications", Polski: "Zapisz Zmiany" },
  "Guardar Ficha": { Español: "Guardar Ficha", English: "Save Profile", Français: "Enregistrer la Fiche", Polski: "Zapisz Kartę" },
  "Apagar Cliente": { Español: "Eliminar Cliente", English: "Delete Client", Français: "Supprimer le Client", Polski: "Usuń Klienta" },
  "Apagar Contacto": { Español: "Eliminar Contacto", English: "Delete Contact", Français: "Supprimer le Contact", Polski: "Usuń Kontakt" },
  "Apagar Projeto": { Español: "Eliminar Projeto", English: "Delete Project", Français: "Supprimer le Projet", Polski: "Usuń Projekt" },
  "Projetos Relacionados com este Cliente": { Español: "Proyectos Relacionados con este Cliente", English: "Projects Related to this Client", Français: "Projets Associés à ce Client", Polski: "Projekty Powiązane z tym Klientem" },
  "Orçamentos do Cliente": { Español: "Presupuestos del Cliente", English: "Client Budgets", Français: "Devis du Client", Polski: "Wyceny Klienta" },
  "Clique ou arraste ficheiros para aqui": { Español: "Haga clic o arrastre archivos aquí", English: "Click or drag files here", Français: "Cliquez ou glissez des fichiers ici", Polski: "Kliknij lub przeciągnij pliki tutaj" },
  "Carregar ficheiros para os projetos deste cliente (qualquer formato)": { Español: "Cargar archivos para los proyectos de este cliente (cualquier formato)", English: "Upload files for this client's projects (any format)", Français: "Télécharger des fichiers pour les projets de ce client (tout format)", Polski: "Wgraj pliki dla projektów tego klienta (dowolny format)" },
  "Nenhum orçamento guardado para este separador.": { Español: "Ningún presupuesto guardado para esta pestaña.", English: "No budgets saved for this tab.", Français: "Aucun devis enregistré pour cet onglet.", Polski: "Brak zapisanych wycen dla tej zakładki." },
  "Nenhum orçamento guardado para este cliente.": { Español: "Ningún presupuesto guardado para este cliente.", English: "No budgets saved for this client.", Français: "Aucun devis enregistré pour ce client.", Polski: "Brak zapisanych wycen dla tego klienta." },
  "Nenhum projeto associado a este cliente.": { Español: "Ningún proyecto asociado a este cliente.", English: "No projects associated with this client.", Français: "Aucun projet associé à ce client.", Polski: "Brak projektów powiązanych z tym klientem." },
  "Nenhum contacto registado para este cliente.": { Español: "Ningún contacto registrado para este cliente.", English: "No contacts registered for this client.", Français: "Aucun contact enregistré pour ce client.", Polski: "Brak zarejestrowanych kontaktów dla tego klienta." },
  "Novo Separador": { Español: "Nueva Pestaña", English: "New Tab", Français: "Nouvel Onglet", Polski: "Nowa Zakładka" },
  "Adicionar Separador": { Español: "Añadir Pestaña", English: "Add Tab", Français: "Ajouter un Onglet", Polski: "Dodaj Zakładkę" },

  // Rótulos e Campos de Formulários (Fichas de Clientes, Contactos, Projetos)
  "Tipo de Cliente": { Español: "Tipo de Cliente", English: "Client Type", Français: "Type de Client", Polski: "Typ Klienta" },
  "Comercial Atribuído": { Español: "Comercial Asignado", English: "Assigned Sales Rep", Français: "Commercial Assigné", Polski: "Przypisany Handlowiec" },
  "Ministério": { Español: "Ministerio", English: "Ministry", Français: "Ministère", Polski: "Ministerstwo" },
  "Nome / Razão Social": { Español: "Nombre / Razón Social", English: "Name / Company Name", Français: "Nom / Raison Sociale", Polski: "Nazwa / Firma" },
  "Contribuinte (NIF)": { Español: "Identificación Fiscal (NIF/CIF)", English: "Tax ID (VAT)", Français: "Numéro Fiscal (NIF/TVA)", Polski: "Numer Podatkowy (NIP)" },
  "Direção (Linha 1)": { Español: "Dirección (Línea 1)", English: "Address (Line 1)", Français: "Adresse (Ligne 1)", Polski: "Adres (Linia 1)" },
  "Direção (Linha 2)": { Español: "Dirección (Línea 2)", English: "Address (Line 2)", Français: "Adresse (Ligne 2)", Polski: "Adres (Linia 2)" },
  "Morada (Linha 1)": { Español: "Dirección (Línea 1)", English: "Address (Line 1)", Français: "Adresse (Ligne 1)", Polski: "Adres (Linia 1)" },
  "Morada (Linha 2)": { Español: "Dirección (Línea 2)", English: "Address (Line 2)", Français: "Adresse (Ligne 2)", Polski: "Adres (Linia 2)" },
  "Nº": { Español: "N.º", English: "No.", Français: "N°", Polski: "Nr" },
  "Andar": { Español: "Piso", English: "Floor", Français: "Étage", Polski: "Piętro" },
  "Código Postal": { Español: "Código Postal", English: "Postal Code", Français: "Code Postal", Polski: "Kod Pocztowy" },
  "Localidade": { Español: "Localidad", English: "City / Town", Français: "Localité", Polski: "Miejscowość" },
  "País": { Español: "País", English: "Country", Français: "Pays", Polski: "Kraj" },
  "Telefone": { Español: "Teléfono", English: "Phone", Français: "Téléphone", Polski: "Telefon" },
  "Telemóvel": { Español: "Móvil", English: "Mobile", Français: "Portable", Polski: "Telefon Komórkowy" },
  "Email": { Español: "Correo Electrónico", English: "Email", Français: "Email", Polski: "Email" },
  "Notas": { Español: "Notas", English: "Notes", Français: "Notes", Polski: "Notatki" },
  "Data do Contacto": { Español: "Fecha del Contacto", English: "Contact Date", Français: "Date du Contact", Polski: "Data Kontaktu" },
  "Registo do Contacto (Escrita Livre)": { Español: "Registro del Contacto (Texto Libre)", English: "Contact Record (Free Text)", Français: "Compte-rendu du Contact (Texte Libre)", Polski: "Rejestr Kontaktu (Tekst Dowolny)" },
  "Registo Livre do Contacto (Expande Automaticamente)": { Español: "Registro Libre del Contacto (Autoexpansible)", English: "Free Contact Record (Auto-expanding)", Français: "Enregistrement Libre du Contact (Auto-extensible)", Polski: "Wpis Kontaktu (Automatyczne Rozszerzanie)" },
  "Pessoas de Contacto (Pessoas que trabalham nesta empresa)": { Español: "Personas de Contacto (Personas que trabajan en esta empresa)", English: "Contact Persons (People who work at this company)", Français: "Personnes de Contact (Personnes travaillant dans cette entreprise)", Polski: "Osoby do Kontaktu (Osoby pracujące w tej firmie)" },
  "Associar Contacto Existente": { Español: "Asociar Contacto Existente", English: "Link Existing Contact", Français: "Associer Contact Existant", Polski: "Powiąż Istniejący Kontakt" },
  "Novo Contacto": { Español: "Nuevo Contacto", English: "New Contact", Français: "Nouveau Contact", Polski: "Nowy Kontakt" },
  "Projetos Relacionados": { Español: "Proyectos Relacionados", English: "Related Projects", Français: "Projets Associés", Polski: "Powiązane Projekty" },
  "Novo Projeto": { Español: "Nuevo Proyecto", English: "New Project", Français: "Nouveau Projet", Polski: "Nowy Projekt" },
  "Registo de Contactos Realizados com este Cliente": { Español: "Registro de Contactos Realizados con este Cliente", English: "Record of Contacts Made with this Client", Français: "Historique des Contacts Réalisés avec ce Client", Polski: "Rejestr Kontaktów z tym Klientem" },
  "Adicionar Contacto": { Español: "Añadir Contacto", English: "Add Contact", Français: "Ajouter un Contact", Polski: "Dodaj Kontakt" },
  "Adicionar Projeto": { Español: "Añadir Proyecto", English: "Add Project", Français: "Ajouter un Projet", Polski: "Dodaj Projekt" },
  "Guardar Ficha do Cliente": { Español: "Guardar Ficha del Cliente", English: "Save Client Profile", Français: "Enregistrer la Fiche Client", Polski: "Zapisz Kartę Klienta" },
  "Eliminar Cliente": { Español: "Eliminar Cliente", English: "Delete Client", Français: "Supprimer le Client", Polski: "Usuń Klienta" },
  "Nenhum contacto registado para este cliente.": { Español: "Ningún contacto registrado para este cliente.", English: "No contacts registered for this client.", Français: "Aucun contact enregistré pour ce client.", Polski: "Brak zarejestrowanych kontaktów dla tego klienta." },
  "Nenhum projeto associado a este cliente.": { Español: "Ningún proyecto asociado a este cliente.", English: "No projects associated with this client.", Français: "Aucun projet associé à ce client.", Polski: "Brak powiązanych projektów dla tego klienta." },
  "Nenhum contacto/interação registada com este cliente.": { Español: "Ningún contacto/interacción registrada con este cliente.", English: "No contacts/interactions recorded with this client.", Français: "Aucun contact/interaction enregistré avec ce client.", Polski: "Brak zarejestrowanych kontaktów/interakcji z tym klientem." },
  "Mais recente": { Español: "Más reciente", English: "Most recent", Français: "Plus récent", Polski: "Najnowsze" },
  "Mais antigo": { Español: "Más antiguo", English: "Oldest", Français: "Plus ancien", Polski: "Najstarsze" },
  "Ficha de Cliente": { Español: "Ficha de Cliente", English: "Client Profile", Français: "Fiche Client", Polski: "Karta Klienta" },
  "Ficha de Contacto": { Español: "Ficha de Contacto", English: "Contact Profile", Français: "Fiche de Contact", Polski: "Karta Kontaktu" },
  "Ficha de Projeto": { Español: "Ficha de Proyecto", English: "Project Profile", Français: "Fiche de Projet", Polski: "Karta Projektu" },
  "Cliente Associado (Empresa)": { Español: "Cliente Asociado (Empresa)", English: "Associated Client (Company)", Français: "Client Associé (Entreprise)", Polski: "Powiązany Klient (Firma)" },
  "Primeiro Nome": { Español: "Nombre", English: "First Name", Français: "Prénom", Polski: "Imię" },
  "Último Nome": { Español: "Apellido", English: "Last Name", Français: "Nom de Famille", Polski: "Nazwisko" },
  "Cargo / Função": { Español: "Cargo / Función", English: "Role / Position", Français: "Poste / Fonction", Polski: "Stanowisko / Funkcja" },
  "Cargo": { Español: "Cargo", English: "Position", Français: "Poste", Polski: "Stanowisko" },
  "Nome do Projeto": { Español: "Nombre del Proyecto", English: "Project Name", Français: "Nom du Projet", Polski: "Nazwa Projektu" },
  "Tipo de Projeto": { Español: "Tipo de Proyecto", English: "Project Type", Français: "Type de Projet", Polski: "Typ Projektu" },
  "Nome do Cliente": { Español: "Nombre del Cliente", English: "Client Name", Français: "Nom du Client", Polski: "Nazwa Klienta" },
  "Contacto do Cliente (1)": { Español: "Contacto del Cliente (1)", English: "Client Contact (1)", Français: "Contact Client (1)", Polski: "Kontakt Klienta (1)" },
  "Contacto do Cliente (2)": { Español: "Contacto del Cliente (2)", English: "Client Contact (2)", Français: "Contact Client (2)", Polski: "Kontakt Klienta (2)" },
  "Data de Início": { Español: "Fecha de Inicio", English: "Start Date", Français: "Date de Début", Polski: "Data Rozpoczęcia" },
  "Data de Fim": { Español: "Fecha de Fin", English: "End Date", Français: "Date de Fin", Polski: "Data Zakończenia" },
  "Viatura": { Español: "Vehículo", English: "Vehicle", Français: "Véhicule", Polski: "Pojazd" },
  "Matrícula": { Español: "Matrícula", English: "License Plate", Français: "Immatriculation", Polski: "Numer Rejestracyjny" },
  "Data do Registo": { Español: "Fecha del Registro", English: "Record Date", Français: "Date d'Enregistrement", Polski: "Data Wpisu" },
  "Registo do Projeto (Escrita Livre)": { Español: "Registro del Proyecto (Texto Libre)", English: "Project Record (Free Text)", Français: "Compte-rendu du Projet (Texte Libre)", Polski: "Rejestr Projektu (Tekst Dowolny)" },
  "Registo Livre do Projeto (Expande Automaticamente)": { Español: "Registro Libre del Proyecto (Autoexpansible)", English: "Free Project Record (Auto-expanding)", Français: "Enregistrement Libre du Projet (Auto-extensible)", Polski: "Wpis Projektu (Automatyczne Rozszerzanie)" },
  "Selecione o Novo Cliente": { Español: "Seleccione el Nuevo Cliente", English: "Select New Client", Français: "Sélectionnez le Nouveau Client", Polski: "Wybierz Nowego Klienta" },
  "Selecione o Separador / Organismo de Destino": { Español: "Seleccione la Pestaña / Organismo de Destino", English: "Select Target Tab / Department", Français: "Sélectionnez l'Onglet / Organisme de Destination", Polski: "Wybierz Zakładkę / Organ Docelowy" },
  "Selecione o Novo Separador": { Español: "Seleccione la Nueva Pestaña", English: "Select New Tab", Français: "Sélectionnez le Nouvel Onglet", Polski: "Wybierz Nową Zakładkę" },
  "Selecione o Cliente de Destino": { Español: "Seleccione el Cliente de Destino", English: "Select Target Client", Français: "Sélectionnez le Client de Destination", Polski: "Wybierz Klienta Docelowego" },
  "Mover Separador": { Español: "Mover Pestaña", English: "Move Tab", Français: "Déplacer Onglet", Polski: "Przenieś Zakładkę" },
  "Mudar de cliente": { Español: "Cambiar de cliente", English: "Change client", Français: "Changer de client", Polski: "Zmień klienta" },
  "Editar Ficha de Contacto": { Español: "Editar Ficha de Contacto", English: "Edit Contact Profile", Français: "Modifier la Fiche de Contact", Polski: "Edytuj Kartę Kontaktu" },
  "Apagar Contacto": { Español: "Eliminar Contacto", English: "Delete Contact", Français: "Supprimer le Contact", Polski: "Usuń Kontakt" },
  "Editar Ficha do Cliente": { Español: "Editar Ficha del Cliente", English: "Edit Client Profile", Français: "Modifier la Fiche Client", Polski: "Edytuj Kartę Klienta" },
  "Editar Ficha de Cliente": { Español: "Editar Ficha de Cliente", English: "Edit Client Profile", Français: "Modifier la Fiche Client", Polski: "Edytuj Kartę Klienta" },
  "Eliminar Projeto": { Español: "Eliminar Proyecto", English: "Delete Project", Français: "Supprimer le Projet", Polski: "Usuń Projekt" },
  "Editar Ficha de Projeto": { Español: "Editar Ficha de Proyecto", English: "Edit Project Profile", Français: "Modifier la Fiche de Projet", Polski: "Edytuj Kartę Projektu" },
  "Ver Todos": { Español: "Ver Todos", English: "View All", Français: "Voir Tout", Polski: "Zobacz Wszystkie" },
  "Fichas ativas": { Español: "Fichas activas", English: "Active records", Français: "Fiches actives", Polski: "Aktywne karty" },
  "Veículos alocados": { Español: "Vehículos asignados", English: "Allocated vehicles", Français: "Véhicules alloués", Polski: "Przypisane pojazdy" },
  "Nome completo da empresa ou cliente": { Español: "Nombre completo de la empresa o cliente", English: "Full company or client name", Français: "Nom complet de l'entreprise ou du client", Polski: "Pełna nazwa firmy lub klienta" },
  "Rua, Avenida, Praça...": { Español: "Calle, Avenida, Plaza...", English: "Street, Avenue, Square...", Français: "Rue, Avenue, Place...", Polski: "Ulica, Aleja, Plac..." },
  "Bloco, Edifício, Referência...": { Español: "Bloque, Edificio, Referencia...", English: "Block, Building, Reference...", Français: "Bâtiment, Immeuble, Référence...", Polski: "Blok, Budynek, Punkt orientacyjny..." },
  "Escreva observações ou notas sobre este cliente...": { Español: "Escriba observaciones o notas sobre este cliente...", English: "Write observations or notes about this client...", Français: "Écrivez des remarques ou des notes sur ce client...", Polski: "Wpisz uwagi lub notatki o tym kliencie..." },
  "Escreva aqui livremente os detalhes do contacto efetuado...": { Español: "Escriba libremente los detalles del contacto realizado...", English: "Write freely the details of the contact made...", Français: "Écrivez librement les détails du contact effectué...", Polski: "Wpisz szczegóły przeprowadzonego kontaktu..." },
  "Escreva observações ou notas sobre este contacto...": { Español: "Escriba observaciones o notas sobre este contacto...", English: "Write observations or notes about this contact...", Français: "Écrivez des remarques ou des notes sur ce contact...", Polski: "Wpisz uwagi lub notatki o tym kontakcie..." },
  "Escreva livremente as notas do contacto...": { Español: "Escriba libremente las notas del contacto...", English: "Write freely the contact notes...", Français: "Écrivez librement les notes du contact...", Polski: "Wpisz notatki dotyczące kontaktu..." },
  "Escreva aqui livremente os detalhes e notas do projeto...": { Español: "Escriba libremente los detalles y notas del proyecto...", English: "Write freely the project details and notes...", Français: "Écrivez librement les détails et notes du projet...", Polski: "Wpisz szczegóły i notatki dotyczące projektu..." },
  "Escreva livremente as notas do projeto...": { Español: "Escriba libremente las notas del proyecto...", English: "Write freely the project notes...", Français: "Écrivez librement les notes du projet...", Polski: "Wpisz notatki dotyczące projektu..." },
  "ex: Lisboa, Porto, Tavira": { Español: "ej: Madrid, Barcelona, Sevilla", English: "ex: London, Manchester, Bristol", Français: "ex: Paris, Lyon, Marseille", Polski: "np: Warszawa, Kraków, Wrocław" },
  "ex: Portugal, Espanha...": { Español: "ej: España, Portugal, Francia...", English: "ex: United Kingdom, France, Germany...", Français: "ex: France, Espagne, Belgique...", Polski: "np: Polska, Niemcy, Francja..." },
  "ex: Ministério da Economia": { Español: "ej: Ministerio de Economía", English: "ex: Ministry of Economy", Français: "ex: Ministère de l'Économie", Polski: "np: Ministerstwo Gospodarki" },
  "ex: Diretor de Compras / Gerente": { Español: "ej: Director de Compras / Gerente", English: "ex: Purchasing Director / Manager", Français: "ex: Directeur des Achats / Gérant", Polski: "np: Dyrektor ds. Zakupów / Kierownik" },
  "ex: Campanha de Verão 2026": { Español: "ej: Campaña de Verano 2026", English: "ex: Summer Campaign 2026", Français: "ex: Campagne d'Été 2026", Polski: "np: Kampania Letnia 2026" },
  "ex: Carrinha Box": { Español: "ej: Furgón Carrozado", English: "ex: Box Van", Français: "ex: Fourgon Grand Volume", Polski: "np: Furgon Kontenerowy" },
  "Acrescente outro separador (+)": { Español: "Añadir otra pestaña (+)", English: "Add another tab (+)", Français: "Ajouter un autre onglet (+)", Polski: "Dodaj kolejną zakładkę (+)" },

  // Tipos de Cliente
  "Privado": { Español: "Privado", English: "Private", Français: "Privé", Polski: "Prywatny" },
  "Estatal": { Español: "Estatal", English: "State", Français: "Étatique", Polski: "Państwowy" },
  "Fundação": { Español: "Fundación", English: "Foundation", Français: "Fondation", Polski: "Fundacja" },

  // Estados de Projetos
  "Aguarda Orçamento": { Español: "Esperando Presupuesto", English: "Awaiting Budget", Français: "En attente de Devis", Polski: "Oczekuje na Wycenę" },
  "Aguarda decisão": { Español: "Esperando Decisión", English: "Awaiting Decision", Français: "En attente de Décision", Polski: "Oczekuje na Decyzję" },
  "Aguarda Decisão": { Español: "Esperando Decisión", English: "Awaiting Decision", Français: "En attente de Décision", Polski: "Oczekuje na Decyzję" },
  "Em Curso": { Español: "En Curso", English: "In Progress", Français: "En Cours", Polski: "W Trakcie" },
  "Concluído": { Español: "Concluido", English: "Completed", Français: "Terminé", Polski: "Zakończony" },
  "Cancelado": { Español: "Cancelado", English: "Cancelled", Français: "Annulé", Polski: "Anulowany" },
  "Adjudicado": { Español: "Adjudicado", English: "Awarded", Français: "Attribué", Polski: "Przyznany" },
  "Não Adjudicado": { Español: "No Adjudicado", English: "Not Awarded", Français: "Non Attribué", Polski: "Nieprzyznany" },

  // Tipos de Projeto
  "Unidade Móvel": { Español: "Unidad Móvil", English: "Mobile Unit", Français: "Unité Mobile", Polski: "Jednostka Mobilna" },
  "Transformação": { Español: "Transformación", English: "Transformation", Français: "Transformation", Polski: "Adaptacja" },
  "Veículo Especial": { Español: "Vehículo Especial", English: "Special Vehicle", Français: "Véhicule Spécial", Polski: "Pojazd Specjalny" },
  "Smartbus": { Español: "Smartbus", English: "Smartbus", Français: "Smartbus", Polski: "Smartbus" },
  "Semirreboque": { Español: "Semirremolque", English: "Semi-trailer", Français: "Semi-remorque", Polski: "Naczepa" },
  "Furgão": { Español: "Furgón", English: "Van", Français: "Fourgon", Polski: "Furgon" },
  "Camião": { Español: "Camión", English: "Truck", Français: "Camion", Polski: "Ciężarówka" },

  // Tipos de Separador Estatal
  "Ministério": { Español: "Ministerio", English: "Ministry", Français: "Ministère", Polski: "Ministerstwo" },
  "Secretaria de Estado": { Español: "Secretaría de Estado", English: "State Secretariat", Français: "Secrétariat d'État", Polski: "Sekretariat Stanu" },
  "Direção Geral": { Español: "Dirección General", English: "General Directorate", Français: "Direction Générale", Polski: "Dyrekcja Generalna" },
  "Geral": { Español: "General", English: "General", Français: "Général", Polski: "Ogólne" },
  "Outro": { Español: "Otro", English: "Other", Français: "Autre", Polski: "Inny" },

  // Cargos Comuns
  "Diretor Geral": { Español: "Director General", English: "Managing Director", Français: "Directeur Général", Polski: "Dyrektor Generalny" },
  "Diretor Comercial": { Español: "Director Comercial", English: "Commercial Director", Français: "Directeur Commercial", Polski: "Dyrektor Handlowy" },
  "Diretora Comercial": { Español: "Directora Comercial", English: "Commercial Director", Français: "Directrice Commerciale", Polski: "Dyrektorka Handlowa" },
  "Diretora Geral": { Español: "Directora General", English: "Managing Director", Français: "Directrice Générale", Polski: "Dyrektorka Generalna" },
  "Responsável de Compras": { Español: "Responsable de Compras", English: "Purchasing Manager", Français: "Responsable des Achats", Polski: "Kierownik ds. Zakupów" },
  "Gestor de Frotas": { Español: "Gestor de Flotas", English: "Fleet Manager", Français: "Gestionnaire de Flotte", Polski: "Kierownik Floty" },
  "Engenheiro": { Español: "Ingeniero", English: "Engineer", Français: "Ingénieur", Polski: "Inżynier" },
  "Engenheira": { Español: "Ingeniera", English: "Engineer", Français: "Ingénieure", Polski: "Inżynier" },
  "Técnico": { Español: "Técnico", English: "Technician", Français: "Technicien", Polski: "Technik" },
  "Técnica": { Español: "Técnica", English: "Technician", Français: "Technicienne", Polski: "Techniczka" },
  "Consultor": { Español: "Consultor", English: "Consultant", Français: "Consultant", Polski: "Konsultant" },
  "Consultora": { Español: "Consultora", English: "Consultant", Français: "Consultante", Polski: "Konsultantka" },
  "Administrador": { Español: "Administrador", English: "Administrator", Français: "Administrateur", Polski: "Administrator" },
  "Presidente": { Español: "Presidente", English: "President", Français: "Président", Polski: "Prezes" },
  "Secretário": { Español: "Secretario", English: "Secretary", Français: "Secrétaire", Polski: "Sekretarz" },
  "Secretária": { Español: "Secretaria", English: "Secretary", Français: "Secrétaire", Polski: "Sekretarka" },

  // Países Comuns
  "Portugal": { Español: "Portugal", English: "Portugal", Français: "Portugal", Polski: "Portugalia" },
  "Espanha": { Español: "España", English: "Spain", Français: "Espagne", Polski: "Hiszpania" },
  "França": { Español: "Francia", English: "France", Français: "France", Polski: "Francja" },
  "Reino Unido": { Español: "Reino Unido", English: "United Kingdom", Français: "Royaume-Uni", Polski: "Wielka Brytania" },
  "Alemanha": { Español: "Alemania", English: "Germany", Français: "Allemagne", Polski: "Niemcy" },
  "Itália": { Español: "Italia", English: "Italy", Français: "Italie", Polski: "Włochy" },
  "Polónia": { Español: "Polonia", English: "Poland", Français: "Pologne", Polski: "Polska" },
  "Angola": { Español: "Angola", English: "Angola", Français: "Angola", Polski: "Angola" },
  "Moçambique": { Español: "Mozambique", English: "Mozambique", Français: "Mozambique", Polski: "Mozambik" },
  "Cabo Verde": { Español: "Cabo Verde", English: "Cape Verde", Français: "Cap-Vert", Polski: "Republika Zielonego Przylądka" },
  "Senegal": { Español: "Senegal", English: "Senegal", Français: "Sénégal", Polski: "Senegal" },
  "Marrocos": { Español: "Marruecos", English: "Morocco", Français: "Maroc", Polski: "Maroko" },

  // Acompanhamento e Próximo Contacto de Clientes
  "Próximo contacto:": { Español: "Próximo contacto:", English: "Next contact:", Français: "Prochain contact :", Polski: "Następny kontakt:" },
  "Próximo contacto": { Español: "Próximo contacto", English: "Next contact", Français: "Prochain contact", Polski: "Następny kontakt" },
  "Próximo Contacto": { Español: "Próximo Contacto", English: "Next Contact", Français: "Prochain Contact", Polski: "Następny Kontakt" },
  "Acompanhamento de Clientes": { Español: "Seguimiento de Clientes", English: "Client Follow-up", Français: "Suivi des Clients", Polski: "Monitorowanie Klientów" },
  "Sem data agendada": { Español: "Sin fecha programada", English: "No date scheduled", Français: "Aucune date prévue", Polski: "Brak zaplanowanej daty" },
  "Em atraso": { Español: "Atrasado", English: "Overdue", Français: "En retard", Polski: "Zaległe" },
  "Amanhã": { Español: "Mañana", English: "Tomorrow", Français: "Demain", Polski: "Jutro" },
  "em": { Español: "en", English: "in", Français: "dans", Polski: "za" },
  "dias": { Español: "días", English: "days", Français: "jours", Polski: "dni" },
  "Último Contacto Realizado": { Español: "Último Contacto Realizado", English: "Last Contact Made", Français: "Dernier Contact Réalisé", Polski: "Ostatni Przeprowadzony Kontakt" },
  "Último contacto": { Español: "Último contacto", English: "Last contact", Français: "Dernier contact", Polski: "Ostatni kontakt" },
  "Sem registo prévio": { Español: "Sin registro previo", English: "No previous record", Français: "Aucun enregistrement préalable", Polski: "Brak wcześniejszego wpisu" },
  "Abrir Ficha": { Español: "Abrir Ficha", English: "Open Profile", Français: "Ouvrir Fiche", Polski: "Otwórz Kartę" },
  "Nenhum cliente registado.": { Español: "Ningún cliente registrado.", English: "No registered clients.", Français: "Aucun client enregistré.", Polski: "Brak zarejestrowanych klientów." },
  "Data de próximo contacto atualizada com sucesso!": { Español: "¡Fecha de próximo contacto actualizada con éxito!", English: "Next contact date updated successfully!", Français: "Date du prochain contact mise à jour avec succès !", Polski: "Pomyślnie zaktualizowano datę następnego kontaktu!" },
  "Contacto / Telefone": { Español: "Contacto / Teléfono", English: "Contact / Phone", Français: "Contact / Téléphone", Polski: "Kontakt / Telefon" },
  "Data agendada para o próximo contacto": { Español: "Fecha programada para el próximo contacto", English: "Scheduled date for the next contact", Français: "Date prévue pour le prochain contact", Polski: "Zaplanowana data kolejnego kontaktu" },

  // Cabeçalhos & Dashboard
  "Acompanhamento de Clientes": { Español: "Seguimiento de Clientes", English: "Client Tracking", Français: "Suivi des Clients", Polski: "Śledzenie Klientów" },
  "Acompanhamento de Projetos": { Español: "Seguimiento de Proyectos", English: "Project Tracking", Français: "Suivi des Projets", Polski: "Śledzenie Projektów" },
  "Clientes Registados": { Español: "Clientes Registrados", English: "Registered Clients", Français: "Clients Enregistrés", Polski: "Zarejestrowani Klienci" },
  "Contactos Registados": { Español: "Contactos Registrados", English: "Registered Contacts", Français: "Contacts Enregistrés", Polski: "Zarejestrowani Kontakty" },
  "Projetos Registados": { Español: "Proyectos Registrados", English: "Registered Projects", Français: "Projets Enregistrés", Polski: "Zarejestrowane Projekty" },
  "Orçamentos Registados": { Español: "Presupuestos Registrados", English: "Registered Budgets", Français: "Devis Enregistrés", Polski: "Zarejestrowane Wyceny" },
  "Ver Todos": { Español: "Ver Todos", English: "View All", Français: "Voir Tout", Polski: "Zobacz Wszystkie" },
  "Menu Principal": { Español: "Menú Principal", English: "Main Menu", Français: "Menu Principal", Polski: "Menu Główne" },

  // Clientes
  "Registo / Ficha do Cliente": { Español: "Registro / Ficha del Cliente", English: "Client Profile / Record", Français: "Fiche du Client", Polski: "Karta Klienta" },
  "Ficha do Cliente": { Español: "Ficha del Cliente", English: "Client Profile", Français: "Fiche du Client", Polski: "Karta Klienta" },
  "Novo Cliente": { Español: "Nuevo Cliente", English: "New Client", Français: "Nouveau Client", Polski: "Nowy Klient" },
  "Importar Clientes": { Español: "Importar Clientes", English: "Import Clients", Français: "Importer Clients", Polski: "Importuj Klientów" },
  "Exportar Clientes": { Español: "Exportar Clientes", English: "Export Clients", Français: "Exporter Clients", Polski: "Eksportuj Klientów" },
  "Nome do Cliente:": { Español: "Nombre del Cliente:", English: "Client Name:", Français: "Nom du Client :", Polski: "Nazwa Klienta:" },
  "Nome do Cliente": { Español: "Nombre del Cliente", English: "Client Name", Français: "Nom du Client", Polski: "Nazwa Klienta" },
  "Nome Comercial / Fantasia:": { Español: "Nombre Comercial:", English: "Trade Name:", Français: "Nom Commercial :", Polski: "Nazwa Handlowa:" },
  "Nome Comercial / Fantasia": { Español: "Nombre Comercial", English: "Trade Name", Français: "Nom Commercial", Polski: "Nazwa Handlowa" },
  "NIF / CIF / NIPC:": { Español: "NIF / CIF / NIPC:", English: "Tax ID / VAT No:", Français: "Numéro TVA / NIF :", Polski: "NIP / REGON:" },
  "NIF / CIF / NIPC": { Español: "NIF / CIF / NIPC", English: "Tax ID / VAT No", Français: "Numéro TVA / NIF", Polski: "NIP / REGON" },
  "Setor de Atividade:": { Español: "Sector de Actividad:", English: "Industry Sector:", Français: "Secteur d'Activité :", Polski: "Sektor Działalności:" },
  "Setor de Atividade": { Español: "Sector de Actividad", English: "Industry Sector", Français: "Secteur d'Activité", Polski: "Sektor Działalności" },
  "Morada / Endereço:": { Español: "Dirección:", English: "Address:", Français: "Adresse :", Polski: "Adres:" },
  "Morada / Endereço": { Español: "Dirección", English: "Address", Français: "Adresse", Polski: "Adres" },
  "Código Postal:": { Español: "Código Postal:", English: "Postal Code:", Français: "Code Postal :", Polski: "Kod Pocztowy:" },
  "Código Postal": { Español: "Código Postal", English: "Postal Code", Français: "Code Postal", Polski: "Kod Pocztowy" },
  "Localidade / Cidade:": { Español: "Localidad / Ciudad:", English: "City / Locality:", Français: "Ville / Localité :", Polski: "Miejscowość / Miasto:" },
  "Localidade / Cidade": { Español: "Localidad / Ciudad", English: "City / Locality", Français: "Ville / Localité", Polski: "Miejscowość / Miasto" },
  "Distrito / Região:": { Español: "Provincia / Región:", English: "State / Region:", Français: "Région / Département :", Polski: "Województwo / Region:" },
  "Distrito / Região": { Español: "Provincia / Región", English: "State / Region", Français: "Région / Département", Polski: "Województwo / Region" },
  "País:": { Español: "País:", English: "Country:", Français: "Pays :", Polski: "Kraj:" },
  "País": { Español: "País", English: "Country", Français: "Pays", Polski: "Kraj" },
  "Telefone Principal:": { Español: "Teléfono Principal:", English: "Main Phone:", Français: "Téléphone Principal :", Polski: "Główny Telefon:" },
  "Telefone Principal": { Español: "Teléfono Principal", English: "Main Phone", Français: "Téléphone Principal", Polski: "Główny Telefon" },
  "Email Principal:": { Español: "Correo Electrónico:", English: "Main Email:", Français: "Email Principal :", Polski: "Główny Email:" },
  "Email Principal": { Español: "Correo Electrónico", English: "Main Email", Français: "Email Principal", Polski: "Główny Email" },
  "Página Web / Site:": { Español: "Sitio Web:", English: "Website:", Français: "Site Web :", Polski: "Strona WWW:" },
  "Página Web / Site": { Español: "Sitio Web", English: "Website", Français: "Site Web", Polski: "Strona WWW" },
  "Observações Gerais:": { Español: "Observaciones Generales:", English: "General Notes:", Français: "Remarques Générales :", Polski: "Uwagi Ogólne:" },
  "Observações Gerais": { Español: "Observaciones Generales", English: "General Notes", Français: "Remarques Générales", Polski: "Uwagi Ogólne" },
  "Estado do Cliente:": { Español: "Estado del Cliente:", English: "Client Status:", Français: "Statut du Client :", Polski: "Status Klienta:" },
  "Estado do Cliente": { Español: "Estado del Cliente", English: "Client Status", Français: "Statut du Client", Polski: "Status Klienta" },
  "Guardar Cliente": { Español: "Guardar Cliente", English: "Save Client", Français: "Enregistrer Client", Polski: "Zapisz Klienta" },
  "Eliminar Cliente": { Español: "Eliminar Cliente", English: "Delete Client", Français: "Supprimer Client", Polski: "Usuń Klienta" },

  // Contactos
  "Registo / Ficha do Contacto": { Español: "Registro / Ficha del Contacto", English: "Contact Profile / Record", Français: "Fiche du Contact", Polski: "Karta Kontaktu" },
  "Ficha do Contacto": { Español: "Ficha del Contacto", English: "Contact Profile", Français: "Fiche du Contact", Polski: "Karta Kontaktu" },
  "Novo Contacto": { Español: "Nuevo Contacto", English: "New Contact", Français: "Nouveau Contact", Polski: "Nowy Kontakt" },
  "Importar Contactos": { Español: "Importar Contactos", English: "Import Contacts", Français: "Importer Contacts", Polski: "Importuj Kontakty" },
  "Exportar Contactos": { Español: "Exportar Contactos", English: "Export Contacts", Français: "Exporter Contacts", Polski: "Eksportuj Kontakty" },
  "Nome do Contacto:": { Español: "Nombre del Contacto:", English: "Contact Name:", Français: "Nom du Contact :", Polski: "Nazwisko Kontaktu:" },
  "Nome do Contacto": { Español: "Nombre del Contacto", English: "Contact Name", Français: "Nom du Contact", Polski: "Nazwisko Kontaktu" },
  "Primeiro Nome:": { Español: "Nombre:", English: "First Name:", Français: "Prénom :", Polski: "Imię:" },
  "Primeiro Nome": { Español: "Nombre", English: "First Name", Français: "Prénom", Polski: "Imię" },
  "Apelidos / Sobrenome:": { Español: "Apellidos:", English: "Last Name:", Français: "Nom de Famille :", Polski: "Nazwisko:" },
  "Apelidos / Sobrenome": { Español: "Apellidos", English: "Last Name", Français: "Nom de Famille", Polski: "Nazwisko" },
  "Cargo / Função:": { Español: "Puesto / Cargo:", English: "Position / Role:", Français: "Poste / Fonction :", Polski: "Stanowisko / Rola:" },
  "Cargo / Função": { Español: "Puesto / Cargo", English: "Position / Role", Français: "Poste / Fonction", Polski: "Stanowisko / Rola" },
  "Departamento:": { Español: "Departamento:", English: "Department:", Français: "Département :", Polski: "Dział:" },
  "Departamento": { Español: "Departamento", English: "Department", Français: "Département", Polski: "Dział" },
  "Telefone Direto:": { Español: "Teléfono Directo:", English: "Direct Phone:", Français: "Téléphone Direct :", Polski: "Telefon Bezpośredni:" },
  "Telefone Direto": { Español: "Teléfono Directo", English: "Direct Phone", Français: "Téléphone Direct", Polski: "Telefon Bezpośredni" },
  "Telemóvel / Celular:": { Español: "Móvil / Celular:", English: "Mobile Phone:", Français: "Téléphone Portable :", Polski: "Telefon Komórkowy:" },
  "Telemóvel / Celular": { Español: "Móvil / Celular", English: "Mobile Phone", Français: "Téléphone Portable", Polski: "Telefon Komórkowy" },
  "Email Direto:": { Español: "Correo Directo:", English: "Direct Email:", Français: "Email Direct :", Polski: "Email Bezpośredni:" },
  "Email Direto": { Español: "Correo Directo", English: "Direct Email", Français: "Email Direct", Polski: "Email Bezpośredni" },
  "Guardar Contacto": { Español: "Guardar Contacto", English: "Save Contact", Français: "Enregistrer Contact", Polski: "Zapisz Kontakt" },
  "Eliminar Contacto": { Español: "Eliminar Contacto", English: "Delete Contact", Français: "Supprimer Contact", Polski: "Usuń Kontakt" },

  // Projetos
  "Registo / Ficha do Projeto": { Español: "Registro / Ficha del Proyecto", English: "Project Profile / Record", Français: "Fiche du Projet", Polski: "Karta Projektu" },
  "Ficha do Projeto": { Español: "Ficha del Proyecto", English: "Project Profile", Français: "Fiche du Projet", Polski: "Karta Projektu" },
  "Novo Projeto": { Español: "Nuevo Proyecto", English: "New Project", Français: "Nouveau Projet", Polski: "Nowy Projekt" },
  "Importar Projetos": { Español: "Importar Proyectos", English: "Import Projects", Français: "Importer Projets", Polski: "Importuj Projekty" },
  "Exportar Projetos": { Español: "Exportar Proyectos", English: "Export Projects", Français: "Exporter Projets", Polski: "Eksportuj Projekty" },
  "Nome do Projeto:": { Español: "Nombre del Proyecto:", English: "Project Name:", Français: "Nom du Projet :", Polski: "Nazwa Projektu:" },
  "Nome do Projeto": { Español: "Nombre del Proyecto", English: "Project Name", Français: "Nom du Projet", Polski: "Nazwa Projektu" },
  "Código do Projeto:": { Español: "Código del Proyecto:", English: "Project Code:", Français: "Code du Projet :", Polski: "Kod Projektu:" },
  "Código do Projeto": { Español: "Código del Proyecto", English: "Project Code", Français: "Code du Projet", Polski: "Kod Projektu" },
  "Tipo de Projeto / Veículo:": { Español: "Tipo de Proyecto / Vehículo:", English: "Project / Vehicle Type:", Français: "Type de Projet / Véhicule :", Polski: "Typ Projektu / Pojazdu:" },
  "Tipo de Projeto / Veículo": { Español: "Tipo de Proyecto / Vehículo", English: "Project / Vehicle Type", Français: "Type de Projet / Véhicule", Polski: "Typ Projektu / Pojazdu" },
  "Estado do Projeto:": { Español: "Estado del Proyecto:", English: "Project Status:", Français: "Statut du Projet :", Polski: "Status Projektu:" },
  "Estado do Projeto": { Español: "Estado del Proyecto", English: "Project Status", Français: "Statut du Projet", Polski: "Status Projektu" },
  "Data de Início:": { Español: "Fecha de Inicio:", English: "Start Date:", Français: "Date de Début :", Polski: "Data Rozpoczęcia:" },
  "Data de Início": { Español: "Fecha de Inicio", English: "Start Date", Français: "Date de Début", Polski: "Data Rozpoczęcia" },
  "Data Prevista de Entrega:": { Español: "Fecha Prevista de Entrega:", English: "Expected Delivery Date:", Français: "Date de Livraison Prévue :", Polski: "Przewidywana Data Dostawy:" },
  "Data Prevista de Entrega": { Español: "Fecha Prevista de Entrega", English: "Expected Delivery Date", Français: "Date de Livraison Prévue", Polski: "Przewidywana Data Dostawy" },
  "Valor Estimado (€):": { Español: "Valor Estimado (€):", English: "Estimated Value (€):", Français: "Valeur Estimée (€) :", Polski: "Szacunkowa Wartość (€):" },
  "Valor Estimado (€)": { Español: "Valor Estimado (€)", English: "Estimated Value (€)", Français: "Valeur Estimée (€)", Polski: "Szacunkowa Wartość (€)" },
  "Guardar Projeto": { Español: "Guardar Proyecto", English: "Save Project", Français: "Enregistrer Projet", Polski: "Zapisz Projekt" },
  "Eliminar Projeto": { Español: "Eliminar Proyecto", English: "Delete Project", Français: "Supprimer Projet", Polski: "Usuń Projekt" },

  // Orçamentos & Especificação Técnica
  "Orçamentação e Especificação Técnica": { Español: "Presupuestación y Especificación Técnica", English: "Budgeting and Technical Specifications", Français: "Budgétisation et Spécifications Techniques", Polski: "Wycena i Specyfikacja Techniczna" },
  "Especificação detalhada de componentes e proposta comercial": { Español: "Especificación detallada de componentes y propuesta comercial", English: "Detailed specification of components and commercial proposal", Français: "Spécification détaillée des composants et proposition commerciale", Polski: "Szczegółowa specyfikacja komponentów i propozycja handlowa" },
  "Descrição / Especificação Técnica": { Español: "Descripción / Especificación Técnica", English: "Description / Technical Specification", Français: "Description / Spécification Technique", Polski: "Opis / Specyfikacja Techniczna" },
  "Descrição / Especificação Técnica:": { Español: "Descripción / Especificación Técnica:", English: "Description / Technical Specification:", Français: "Description / Spécification Technique :", Polski: "Opis / Specyfikacja Techniczna:" },
  "Especificações Técnicas e Orçamentação por Capítulo:": { Español: "Especificaciones Técnicas y Presupuestación por Capítulo:", English: "Technical Specifications and Budgeting by Chapter:", Français: "Spécifications Techniques et Budgétisation par Chapitre :", Polski: "Specyfikacja Techniczna i Wycena według Rozdziałów:" },
  "Especificações Técnicas e Orçamentação por Capítulo": { Español: "Especificaciones Técnicas y Presupuestación por Capítulo", English: "Technical Specifications and Budgeting by Chapter", Français: "Spécifications Techniques et Budgétisation par Chapitre", Polski: "Specyfikacja Techniczna i Wycena według Rozdziałów" },
  "Orçamentação e Avaliação Económica": { Español: "Presupuestación y Evaluación Económica", English: "Budgeting and Economic Evaluation", Français: "Budgétisation et Évaluation Économique", Polski: "Wycena i Ocena Ekonomiczna" },
  "Item / Componente": { Español: "Ítem / Componente", English: "Item / Component", Français: "Article / Composant", Polski: "Pozycja / Komponent" },
  "Item / Componente Opcional": { Español: "Ítem / Componente Opcional", English: "Optional Item / Component", Français: "Article / Composant Optionnel", Polski: "Opcjonalna Pozycja / Komponent" },
  "Preço (€)": { Español: "Precio (€)", English: "Price (€)", Français: "Prix (€)", Polski: "Cena (€)" },
  "Preço Opcional (€)": { Español: "Precio Opcional (€)", English: "Optional Price (€)", Français: "Prix Optionnel (€)", Polski: "Cena Opcjonalna (€)" },
  "Modelo Base:": { Español: "Modelo Base:", English: "Base Model:", Français: "Modèle de Base :", Polski: "Model Bazowy:" },
  "Modelo Base": { Español: "Modelo Base", English: "Base Model", Français: "Modèle de Base", Polski: "Model Bazowy" },
  "Escreva ou selecione um modelo/orçamento...": { Español: "Escriba o seleccione un modelo/presupuesto...", English: "Type or select a model/budget...", Français: "Écrivez ou sélectionnez un modèle/devis...", Polski: "Wpisz lub wybierz model/wycenę..." },
  "Total Geral:": { Español: "Total General:", English: "Grand Total:", Français: "Total Général :", Polski: "Suma Całkowita:" },
  "Total Geral": { Español: "Total General", English: "Grand Total", Français: "Total Général", Polski: "Suma Całkowita" },
  "Referência do Orçamento / Projeto": { Español: "Referencia del Presupuesto / Proyecto", English: "Budget / Project Reference", Français: "Référence du Devis / Projet", Polski: "Referencja Wyceny / Projektu" },
  "Referência do Orçamento / Projeto:": { Español: "Referencia del Presupuesto / Proyecto:", English: "Budget / Project Reference:", Français: "Référence du Devis / Projet :", Polski: "Referencja Wyceny / Projektu:" },
  "Data da Proposta": { Español: "Fecha de la Propuesta", English: "Proposal Date", Français: "Date de la Proposition", Polski: "Data Oferty" },
  "Data da Proposta:": { Español: "Fecha de la Propuesta:", English: "Proposal Date:", Français: "Date de la Proposition :", Polski: "Data Oferty:" },
  "Imagens e Plantas Técnicas da Proposta": { Español: "Imágenes y Planos Técnicos de la Propuesta", English: "Proposal Images and Technical Plans", Français: "Images et Plans Techniques de la Proposition", Polski: "Zdjęcia i Rysunki Techniczne Oferty" },
  "Adicionar Mais um Quadro / Capítulo": { Español: "Añadir Otra Tabla / Capítulo", English: "Add Another Section / Chapter", Français: "Ajouter un Tableau / Chapitre", Polski: "Dodaj Kolejną Sekcję / Rozdział" },
  "Histórico de Orçamentos Guardados (Independentes)": { Español: "Historial de Presupuestos Guardados (Independientes)", English: "Saved Budgets History (Independent)", Français: "Historique des Devis Enregistrés (Indépendants)", Polski: "Historia Zapisanych Wycen (Niezależne)" },
  "NOVO CAPÍTULO / ESPECIFICAÇÃO": { Español: "NUEVO CAPÍTULO / ESPECIFICACIÓN", English: "NEW CHAPTER / SPECIFICATION", Français: "NOUVEAU CHAPITRE / SPÉCIFICATION", Polski: "NOWY ROZDZIAŁ / SPECYFIKACJA" },
  "Novo Capítulo / Especificação": { Español: "Nuevo Capítulo / Especificación", English: "New Chapter / Specification", Français: "Nouveau Chapitre / Spécification", Polski: "Nowy Rozdział / Specyfikacja" },
  "Adicionar Linha": { Español: "Añadir Línea", English: "Add Row", Français: "Ajouter une Ligne", Polski: "Dodaj Wiersz" },
  "Eliminar Capítulo": { Español: "Eliminar Capítulo", English: "Delete Chapter", Français: "Supprimer le Chapitre", Polski: "Usuń Rozdział" },
  "Novo Orçamento": { Español: "Nuevo Presupuesto", English: "New Budget", Français: "Nouveau Devis", Polski: "Nowa Wycena" },
  "Orçamentos Guardados": { Español: "Presupuestos Guardados", English: "Saved Budgets", Français: "Devis Enregistrés", Polski: "Zapisane Wyceny" },
  "Histórico de Orçamentos": { Español: "Historial de Presupuestos", English: "Budget History", Français: "Historique des Devis", Polski: "Historia Wycen" },
  "Número do Orçamento:": { Español: "Número de Presupuesto:", English: "Budget Number:", Français: "Numéro du Devis :", Polski: "Numer Wyceny:" },
  "Número do Orçamento": { Español: "Número de Presupuesto", English: "Budget Number", Français: "Numéro du Devis", Polski: "Numer Wyceny" },
  "Gerador de Memória Descritiva": { Español: "Generador de Memoria Descriptiva", English: "Descriptive Memory Generator", Français: "Générateur de Mémoire Descriptive", Polski: "Generator Opisu Technicznego" },
  "Imprimir PDF": { Español: "Imprimir PDF", English: "Print PDF", Français: "Imprimer PDF", Polski: "Drukuj PDF" },
  "Exportar para Word": { Español: "Exportar a Word", English: "Export to Word", Français: "Exporter vers Word", Polski: "Eksportuj do Word" },
  "Equipamentos Opcionais": { Español: "Equipamientos Opcionales", English: "Optional Equipment", Français: "Équipements Optionnels", Polski: "Wyposażenie Opcjonalne" },
  "Capítulos do Orçamento": { Español: "Capítulos del Presupuesto", English: "Budget Chapters", Français: "Chapitres du Devis", Polski: "Rozdziały Wyceny" },
  "Total Global": { Español: "Total Global", English: "Grand Total", Français: "Total Global", Polski: "Suma Całkowita" },
  "Subtotal": { Español: "Subtotal", English: "Subtotal", Français: "Sous-total", Polski: "Suma Częściowa" },
  "Total c/ IVA": { Español: "Total con IVA", English: "Total incl. VAT", Français: "Total TTC", Polski: "Razem z VAT" },
  "Total s/ IVA": { Español: "Total sin IVA", English: "Total excl. VAT", Français: "Total HT", Polski: "Razem bez VAT" },

  // Capítulos Padrão de Orçamento
  "CHASSI E DIMENSÕES DO VEÍCULO": { Español: "CHASIS Y DIMENSIONES DEL VEHÍCULO", English: "CHASSIS AND VEHICLE DIMENSIONS", Français: "CHÂSSIS ET DIMENSIONS DU VÉHICULE", Polski: "PODWOZIE I WYMIARY POJAZDU" },
  "PORTAS, ACESSOS E EXTERIOR": { Español: "PUERTAS, ACCESOS Y EXTERIOR", English: "DOORS, ACCESS AND EXTERIOR", Français: "PORTES, ACCÈS ET EXTÉRIEUR", Polski: "DRZWI, WEJŚCIA I NA ZEWNĄTRZ" },
  "ISOLAMENTO TÉRMICO E REVESTIMENTOS": { Español: "AISLAMIENTO TÉRMICO Y REVESTIMIENTOS", English: "THERMAL INSULATION AND COATINGS", Français: "ISOLATION THERMIQUE ET REVÊTEMENTS", Polski: "IZOLACJA TERMICZNA I OKŁADZINY" },
  "DIVISÓRIAS, MOBILIÁRIO E ESPAÇO INTERIOR": { Español: "DIVISIONES, MOBILIARIO Y ESPACIO INTERIOR", English: "PARTITIONS, FURNITURE AND INTERIOR SPACE", Français: "CLOISONS, MOBILIER ET ESPACE INTÉRIEUR", Polski: "ŚCIANKI DZIAŁOWE, MEBLE I WNĘTRZE" },
  "CLIMATIZAÇÃO E VENTILAÇÃO": { Español: "CLIMATIZACIÓN Y VENTILACIÓN", English: "AIR CONDITIONING AND VENTILATION", Français: "CLIMATISATION ET VENTILATION", Polski: "KLIMATYZACJA I WENTYLACJA" },
  "INSTALAÇÃO ELÉTRICA, ENERGIA E ILUMINAÇÃO": { Español: "INSTALACIÓN ELÉCTRICA, ENERGÍA E ILUMINACIÓN", English: "ELECTRICAL INSTALLATION, ENERGY AND LIGHTING", Français: "INSTALLATION ÉLECTRIQUE, ÉNERGIE ET ÉCLAIRAGE", Polski: "INSTALACJA ELEKTRYCZNA, ENERGIA I OŚWIETLENIE" },
  "INSTALAÇÃO DE ÁGUAS E SANITÁRIOS": { Español: "INSTALACIÓN DE AGUA Y SANITARIOS", English: "WATER AND SANITARY INSTALLATION", Français: "INSTALLATION D'EAU ET SANITAIRES", Polski: "INSTALACJA WODNO-KANALIZACYJNA" },
  "EQUIPAMENTO TÉCNICO E SEGURANÇA ADICIONAL": { Español: "EQUIPAMIENTO TÉCNICO Y SEGURIDAD ADICIONAL", English: "TECHNICAL EQUIPMENT AND ADDITIONAL SECURITY", Français: "ÉQUIPEMENT TECHNIQUE ET SÉCURITÉ SUPPLÉMENTAIRE", Polski: "WYPOSAŻENIE TECHNICZNE I DODATKOWE BEZPIECZEŃSTWO" },
  "EQUIPAMENTOS OPCIONAIS": { Español: "EQUIPAMIENTOS OPCIONALES", English: "OPTIONAL EQUIPMENT", Français: "ÉQUIPEMENTS OPTIONNELS", Polski: "WYPOSAŻENIE OPCJONALNE" },

  // Nomes dos Itens / Componentes (Coluna Esquerda das Tabelas)
  "Marca e Modelo Base": { Español: "Marca y Modelo Base", English: "Brand and Base Model", Français: "Marque et Modèle de Base", Polski: "Marka i Model Bazowy" },
  "Tipo de Veículo e PMA": { Español: "Tipo de Vehículo y PMA", English: "Vehicle Type and GVW", Français: "Type de Véhicule et PTAC", Polski: "Typ Pojazdu i DMC" },
  "Motorização e Combustível": { Español: "Motorización y Combustible", English: "Engine and Fuel", Français: "Motorisation et Carburant", Polski: "Silnik i Paliwo" },
  "Cilindrada e Potência": { Español: "Cilindrada y Potencia", English: "Displacement and Power", Français: "Cylindrée et Puissance", Polski: "Pojemność i Moc" },
  "Caixa de Velocidades": { Español: "Caja de Cambios", English: "Gearbox", Français: "Boîte de Vitesses", Polski: "Skrzynia Biegów" },
  "Suspensão e Travões": { Español: "Suspensión y Frenos", English: "Suspension and Brakes", Français: "Suspension et Freins", Polski: "Zawieszenie i Hamulce" },
  "Portas de Acesso Principal": { Español: "Puertas de Acceso Principal", English: "Main Access Doors", Français: "Portes d'Accès Principal", Polski: "Główne Drzwi Wejściowe" },
  "Escadas e Acessibilidade": { Español: "Escaleras y Accesibilidad", English: "Stairs and Accessibility", Français: "Escaliers et Accessibilité", Polski: "Schody i Dostępność" },
  "Toldo Exterior Lateral": { Español: "Toldo Exterior Lateral", English: "Lateral Exterior Awning", Français: "Auvent Extérieur Latéral", Polski: "Boczna Markiza Zewnętrzna" },
  "Iluminação Exterior": { Español: "Iluminación Exterior", English: "Exterior Lighting", Français: "Éclairage Extérieur", Polski: "Oświetlenie Zewnętrzne" },
  "Pintura e Imagem Corporativa": { Español: "Pintura e Imagen Corporativa", English: "Paint and Corporate Branding", Français: "Peinture et Image de Marque", Polski: "Lakierowanie i Identyfikacja Wizualna" },
  "Isolamento Térmico e Acústico": { Español: "Aislamiento Térmico y Acústico", English: "Thermal and Acoustic Insulation", Français: "Isolation Thermique et Acoustique", Polski: "Izolacja Termiczna i Akustyczna" },
  "Revestimento de Paredes e Teto": { Español: "Revestimiento de Paredes y Techo", English: "Wall and Ceiling Lining", Français: "Revêtement des Murs et Plafond", Polski: "Okładziny Ścian i Sufitu" },
  "Pavimento Técnico e Vinílico": { Español: "Suelo Técnico y Vinílico", English: "Technical and Vinyl Flooring", Français: "Sol Technique et Vinyle", Polski: "Podłoga Techniczna i Winylowa" },
  "Postos de Atendimento": { Español: "Puestos de Atención", English: "Customer Service Desks", Français: "Postes d'Accueil", Polski: "Stanowiska Obsługi" },
  "Cadeiras de Operador e Clientes": { Español: "Sillas de Operador y Clientes", English: "Operator and Client Chairs", Français: "Sièges Opérateur et Clients", Polski: "Krzesła Operatora i Klientów" },
  "Cofre de Segurança Reforçado": { Español: "Caja Fuerte Reforzada", English: "Reinforced Security Safe", Français: "Coffre-Fort Renforcé", Polski: "Wzmocniony Sejf Bezpieczeństwa" },
  "Sistema Ar Condicionado Multi-Split": { Español: "Sistema de Aire Acondicionado Multi-Split", English: "Multi-Split Air Conditioning System", Français: "Système de Climatisation Multi-Split", Polski: "System Klimatyzacji Multi-Split" },
  "Ventilação e Renovação de Ar": { Español: "Ventilación y Renovación de Aire", English: "Ventilation and Air Renewal", Français: "Ventilation et Renouvellement d'Air", Polski: "Wentylacja i Wymiana Powietrza" },
  "Quadro Elétrico e Proteções": { Español: "Cuadro Eléctrico y Protecciones", English: "Electrical Panel and Protections", Français: "Tableau Électrique et Protections", Polski: "Rozdzielnica Elektryczna i Zabezpieczenia" },
  "Sistema de Baterias e Inversor": { Español: "Sistema de Baterías e Inversor", English: "Battery and Inverter System", Français: "Système de Batteries et Onduleur", Polski: "System Akumulatorów i Falownik" },
  "Tomadas 230V e USB": { Español: "Tomas 230V y USB", English: "230V and USB Sockets", Français: "Prises 230V et USB", Polski: "Gniazda 230V i USB" },
  "Depósitos de Água e Bomba": { Español: "Depósitos de Agua e Bomba", English: "Water Tanks and Pump", Français: "Réservoirs d'Eau et Pompe", Polski: "Zbiorniki na Wodę i Pompa" },
  "Lavatório Inox e Torneira": { Español: "Lavabo de Inox y Grifo", English: "Stainless Steel Sink and Faucet", Français: "Lavabo en Inox et Robinet", Polski: "Umywalka ze Stali Nierdzewnej i Kran" },
  "Rede Informática e Wi-Fi": { Español: "Red Informática y Wi-Fi", English: "IT Network and Wi-Fi", Français: "Réseau Informatique et Wi-Fi", Polski: "Sieć Komputerowa i Wi-Fi" },
  "Extintores e Segurança": { Español: "Extintores y Seguridad", English: "Fire Extinguishers and Safety", Français: "Extincteurs et Sécurité", Polski: "Gaśnice i Bezpieczeństwo" },
  "Patas Estabilizadoras Niveladoras": { Español: "Patas Estabilizadoras Niveladoras", English: "Stabilizer Leveling Jacks", Français: "Pieds Stabilisateurs Niveleurs", Polski: "Podpory Stabilizujące Poziomujące" },
  "Antena Satélite STARLINK FLAT HP": { Español: "Antena Satélite STARLINK FLAT HP", English: "STARLINK FLAT HP Satellite Antenna", Français: "Antenne Satellite STARLINK FLAT HP", Polski: "Antena Satelitarna STARLINK FLAT HP" },
  "Gerador Elétrico Insonorizado": { Español: "Generador Eléctrico Insonorizado", English: "Soundproof Electric Generator", Français: "Groupe Électrogène Insonorisé", Polski: "Wyciszony Agregat Prądotwórczy" },
  "Rampa de Acessibilidade": { Español: "Rampa de Accesibilidad", English: "Accessibility Ramp", Français: "Rampe d'Accessibilité", Polski: "Rampa Dostępności" },
  "Patas Niveladoras Hidráulicas / Elétricas": { Español: "Patas Niveladoras Hidráulicas / Eléctricas", English: "Hydraulic / Electric Leveling Jacks", Français: "Vérins de Mise à Niveau Hydrauliques / Électriques", Polski: "Nogi Poziomujące Hydrauliczne / Elektryczne" },

  // Itens e Especificações Padrão (Placeholders)
  "Marca, modelo e especificações base": { Español: "Marca, modelo y especificaciones base", English: "Brand, model and base specifications", Français: "Marque, modèle et spécifications de base", Polski: "Marka, model i podstawowe specyfikacje" },
  "Tipo de veículo, PMA e peso bruto": { Español: "Tipo de vehículo, PMA e peso bruto", English: "Vehicle type, GVW and gross weight", Français: "Type de véhicule, PTAC et poids brut", Polski: "Typ pojazdu, DMC i masa całkowita" },
  "Tipo de motorização, norma de emissões": { Español: "Tipo de motorización, norma de emisiones", English: "Engine type, emission standard", Français: "Type de motorisation, norme d'émissions", Polski: "Typ silnika, norma emisji" },
  "Cilindrada, potência e binário": { Español: "Cilindrada, potencia y par motor", English: "Displacement, power and torque", Français: "Cylindrée, puissance et couple", Polski: "Pojemność, moc i moment obrotowy" },
  "Tipo de caixa de velocidades": { Español: "Tipo de caja de cambios", English: "Gearbox type", Français: "Type de boîte de vitesses", Polski: "Typ skrzyni biegów" },
  "Tipo de suspensão, sistema de travagem": { Español: "Tipo de suspensión, sistema de frenado", English: "Suspension type, braking system", Français: "Type de suspension, système de freinage", Polski: "Typ zawieszenia, układ hamulcowy" },
  "Especificação das portas de acesso": { Español: "Especificación de las puertas de acceso", English: "Access doors specification", Français: "Spécification des portes d'accès", Polski: "Specyfikacja drzwi wejściowych" },
  "Escadas de acesso, corrimãos e plataformas": { Español: "Escaleras de acceso, barandillas y plataformas", English: "Access stairs, handrails and platforms", Français: "Escaliers d'accès, mains courantes et plateformes", Polski: "Schody wejściowe, poręcze i platformy" },
  "Toldo e proteção exterior": { Español: "Toldo y protección exterior", English: "Awning and exterior protection", Français: "Auvent et protection extérieure", Polski: "Markiza i ochrona zewnętrzna" },
  "Projetores e iluminação perimetral": { Español: "Proyectores e iluminación perimétrica", English: "Spotlights and perimeter lighting", Français: "Projecteurs et éclairage périmétrique", Polski: "Projektory i oświetlenie obwodowe" },
  "Pintura integral, vinil e personalização": { Español: "Pintura integral, vinilo y personalización", English: "Full paint, vinyl and customization", Français: "Peinture intégrale, vinyle et personnalisation", Polski: "Pełne lakierowanie, oklejanie i personalizacja" },
  "Tipo de isolamento térmico e acústico": { Español: "Tipo de aislamiento térmico y acústico", English: "Thermal and acoustic insulation type", Français: "Type d'isolation thermique et acoustique", Polski: "Typ izolacji termicznej i akustycznej" },
  "Materiais de revestimento interior": { Español: "Materiales de revestimiento interior", English: "Interior lining materials", Français: "Matériaux de revêtement intérieur", Polski: "Materiały okładzin wewnętrznych" },
  "Estrutura de pavimento e acabamento": { Español: "Estructura de suelo y acabado", English: "Flooring structure and finish", Français: "Structure de sol et finition", Polski: "Struktura podłogi i wykończenie" },
  "Bancadas e postos de trabalho": { Español: "Bancos y puestos de trabajo", English: "Counters and workstations", Français: "Comptoirs et postes de travail", Polski: "Blaty i stanowiska pracy" },
  "Cadeiras de operador e clientes": { Español: "Sillas de operador y clientes", English: "Operator and client chairs", Français: "Sièges opérateur et clients", Polski: "Krzesła operatora i klientów" },
  "Cofre de segurança e ancoragem": { Español: "Caja fuerte de seguridad y anclaje", English: "Security safe and anchoring", Français: "Coffre-fort de sécurité et ancrage", Polski: "Sejf i kotwienie" },
  "Equipamento de climatização, frio/calor": { Español: "Equipo de climatización, frío/calor", English: "Air conditioning equipment, cooling/heating", Français: "Équipement de climatisation, froid/chaud", Polski: "Urządzenie klimatyzacyjne, chłodzenie/grzanie" },
  "Sistemas de ventilação e renovação de ar": { Español: "Sistemas de ventilación y renovación de aire", English: "Ventilation and air renewal systems", Français: "Systèmes de ventilation et renouvellement d'air", Polski: "Systemy wentylacji i wymiany powietrza" },
  "Quadro elétrico, disjuntores e proteções": { Español: "Cuadro eléctrico, disyuntores y protecciones", English: "Electrical panel, circuit breakers and protections", Français: "Tableau électrique, disjoncteurs et protections", Polski: "Rozdzielnica elektryczna, wyłączniki i zabezpieczenia" },
  "Inversor, carregador e baterias": { Español: "Inversor, cargador y baterías", English: "Inverter, charger and batteries", Français: "Onduleur, chargeur et batteries", Polski: "Falownik, ładowarka i akumulatory" },
  "Tomadas elétricas e portas USB": { Español: "Tomas eléctricas y puertos USB", English: "Electrical sockets and USB ports", Français: "Prises électriques et ports USB", Polski: "Gniazda elektryczne i porty USB" },
  "Depósitos de água limpa/residual e bomba": { Español: "Depósitos de agua limpia/residual y bomba", English: "Clean/waste water tanks and pump", Français: "Réservoirs d'eau propre/usée et pompe", Polski: "Zbiorniki na czystą/szarą wodę i pompa" },
  "Lavatório, torneira e dispensadores": { Español: "Lavabo, grifo y dispensadores", English: "Washbasin, faucet and dispensers", Français: "Lavabo, robinet et distributeurs", Polski: "Umywalka, kran i dozowniki" },
  "Router, cablagem de rede e Wi-Fi": { Español: "Router, cableado de red y Wi-Fi", English: "Router, network cabling and Wi-Fi", Français: "Routeur, câblage réseau et Wi-Fi", Polski: "Router, okablowanie sieciowe i Wi-Fi" },
  "Equipamentos de segurança e combate a incêndio": { Español: "Equipos de seguridad y extinción de incendios", English: "Safety and fire fighting equipment", Français: "Équipements de sécurité et lutte contre l'incendie", Polski: "Sprzęt bezpieczeństwa i przeciwpożarowy" },
  "Ex: 4 patas niveladoras elétricas com comando sem fios MA-VE": { Español: "Ej: 4 patas niveladoras eléctricas con control inalámbrico MA-VE", English: "Ex: 4 electric leveling jacks with MA-VE wireless remote", Français: "Ex : 4 vérins niveleurs électriques avec commande sans fil MA-VE", Polski: "Np: 4 elektryczne podpory poziomujące z bezprzewodowym pilotem MA-VE" },
  "Ex: Antena plana de alta performance no teto com Wi-Fi para locais remotos": { Español: "Ej: Antena plana de alto rendimiento en techo con Wi-Fi para lugares remotos", English: "Ex: High performance flat roof antenna with Wi-Fi for remote locations", Français: "Ex : Antenne plate haute performance sur le toit avec Wi-Fi pour zones isolées", Polski: "Np: Płaska antena dachowa wysokiej wydajności z Wi-Fi do odległych lokalizacji" },
  "Ex: Ayerbe 8000 Invert E 7500W a gasolina com insonorização acústica": { Español: "Ej: Ayerbe 8000 Invert E 7500W de gasolina con insonorización acústica", English: "Ex: Ayerbe 8000 Invert E 7500W gasoline generator with acoustic soundproofing", Français: "Ex : Groupe essence Ayerbe 8000 Invert E 7500W avec insonorisation acoustique", Polski: "Np: Agregat benzynowy Ayerbe 8000 Invert E 7500W z wygłuszeniem akustycznym" },
  "Ex: Rampa desdobrável de acessibilidade para cadeira de rodas": { Español: "Ej: Rampa plegable de accesibilidad para silla de ruedas", English: "Ex: Folding accessibility ramp for wheelchairs", Français: "Ex : Rampe d'accessibilité pliable pour fauteuil roulant", Polski: "Np: Składana rampa dostępowa dla wózków inwalidzkich" },
  "Rampa de Acessibilidade": { Español: "Rampa de Accesibilidad", English: "Accessibility Ramp", Français: "Rampe d'Accessibilité", Polski: "Rampa Dostępności" },
  "Patas Niveladoras Hidráulicas / Elétricas": { Español: "Patas Niveladoras Hidráulicas / Eléctricas", English: "Hydraulic / Electric Leveling Jacks", Français: "Vérins de Mise à Niveau Hydrauliques / Électriques", Polski: "Nogi Poziomujące Hydrauliczne / Elektryczne" },

  // Configuração & Utilizadores
  "Gestão de Utilizadores": { Español: "Gestión de Usuarios", English: "User Management", Français: "Gestion des Utilisateurs", Polski: "Zarządzanie Użytkownikami" },
  "Gestão de Duplicados": { Español: "Gestión de Duplicados", English: "Duplicates Management", Français: "Gestion des Doublons", Polski: "Zarządzanie Duplikatami" },
  "Base de Dados & Backup": { Español: "Base de Datos y Copias", English: "Database & Backup", Français: "Base de Données & Sauvegarde", Polski: "Baza Danych i Kopia" },
  "Atualização de Software": { Español: "Actualización de Software", English: "Software Update", Français: "Mise à Jour Logicielle", Polski: "Aktualizacja Oprogramowania" },
  "Histórico de Atividade": { Español: "Historial de Actividad", English: "Activity History", Français: "Historique d'Activité", Polski: "Historia Aktywności" },
  "Registrar Novo Utilizador": { Español: "Registrar Nuevo Usuario", English: "Register New User", Français: "Enregistrer Nouvel Utilisateur", Polski: "Zarejestruj Nowego Użytkownika" },
  "Criar Cópia de Segurança (Backup)": { Español: "Crear Copia de Seguridad (Backup)", English: "Create Backup", Français: "Créer une Sauvegarde", Polski: "Utwórz Kopię Zapasową" },
  "Restaurar Backup": { Español: "Restaurar Copia de Seguridad", English: "Restore Backup", Français: "Restaurer Sauvegarde", Polski: "Przywróć Kopię Zapasową" },
  "Gerar Pacote de Atualização": { Español: "Generar Paquete de Actualización", English: "Generate Update Package", Français: "Générer Paquet de Mise à Jour", Polski: "Generuj Pakiet Aktualizacji" },
  "Verificar Atualizações": { Español: "Comprobar Actualizaciones", English: "Check for Updates", Français: "Vérifier Mises à Jour", Polski: "Sprawdź Aktualizacje" },
  "Filtrar por Período:": { Español: "Filtrar por Período:", English: "Filter by Period:", Français: "Filtrer par Période :", Polski: "Filtruj wg Okresu:" },
  "Filtrar por Período": { Español: "Filtrar por Período", English: "Filter by Period", Français: "Filtrer par Période", Polski: "Filtruj wg Okresu" },
  "Hoje": { Español: "Hoy", English: "Today", Français: "Aujourd'hui", Polski: "Dzisiaj" },
  "Últimos 7 dias": { Español: "Últimos 7 días", English: "Last 7 days", Français: "7 derniers jours", Polski: "Ostatnie 7 dni" },
  "Últimos 30 dias": { Español: "Últimos 30 días", English: "Last 30 days", Français: "30 derniers jours", Polski: "Ostatnie 30 dni" },
  "Todo o Histórico": { Español: "Todo el Historial", English: "All History", Français: "Tout l'Historique", Polski: "Cała Historia" },

  // Ações Comuns & Estados
  "Ações": { Español: "Acciones", English: "Actions", Français: "Actions", Polski: "Akcje" },
  "Nome": { Español: "Nombre", English: "Name", Français: "Nom", Polski: "Nazwa" },
  "Cliente": { Español: "Cliente", English: "Client", Français: "Client", Polski: "Klient" },
  "Contacto": { Español: "Contacto", English: "Contact", Français: "Contact", Polski: "Kontakt" },
  "Projeto": { Español: "Proyecto", English: "Project", Français: "Projet", Polski: "Projekt" },
  "Setor": { Español: "Sector", English: "Sector", Français: "Secteur", Polski: "Sektor" },
  "Telefone": { Español: "Teléfono", English: "Phone", Français: "Téléphone", Polski: "Telefon" },
  "Email": { Español: "Correo Electrónico", English: "Email", Français: "Email", Polski: "Email" },
  "Estado": { Español: "Estado", English: "Status", Français: "Statut", Polski: "Status" },
  "Data": { Español: "Fecha", English: "Date", Français: "Date", Polski: "Data" },
  "Valor": { Español: "Valor", English: "Value", Français: "Valeur", Polski: "Wartość" },
  "Editar": { Español: "Editar", English: "Edit", Français: "Modifier", Polski: "Edytuj" },
  "Eliminar": { Español: "Eliminar", English: "Delete", Français: "Supprimer", Polski: "Usuń" },
  "Ver Ficha": { Español: "Ver Ficha", English: "View Profile", Français: "Voir Fiche", Polski: "Zobacz Kartę" },
  "Imprimir": { Español: "Imprimir", English: "Print", Français: "Imprimer", Polski: "Drukuj" },
  "Exportar": { Español: "Exportar", English: "Export", Français: "Exporter", Polski: "Eksportuj" },
  "Importar": { Español: "Importar", English: "Import", Français: "Importer", Polski: "Importuj" },
  "Pesquisar": { Español: "Buscar", English: "Search", Français: "Chercher", Polski: "Szukaj" },
  "Filtrar": { Español: "Filtrar", English: "Filter", Français: "Filtrer", Polski: "Filtruj" },
  "Todos": { Español: "Todos", English: "All", Français: "Tous", Polski: "Wszystkie" },
  "Ativos": { Español: "Activos", English: "Active", Français: "Actifs", Polski: "Aktywni" },
  "Inativos": { Español: "Inactivos", English: "Inactive", Français: "Inactifs", Polski: "Nieaktywni" },
  "Ativo": { Español: "Activo", English: "Active", Français: "Actif", Polski: "Aktywny" },
  "Inativo": { Español: "Inactivo", English: "Inactive", Français: "Inactif", Polski: "Nieaktywny" },
  "Lista": { Español: "Lista", English: "List", Français: "Liste", Polski: "Lista" },
  "Cartões": { Español: "Tarjetas", English: "Cards", Français: "Cartes", Polski: "Karty" },
  "Fechar": { Español: "Cerrar", English: "Close", Français: "Fermer", Polski: "Zamknij" },
  "Cancelar": { Español: "Cancelar", English: "Cancel", Français: "Annuler", Polski: "Anuluj" },
  "Guardar": { Español: "Guardar", English: "Save", Français: "Enregistrer", Polski: "Zapisz" },
  "Confirmar": { Español: "Confirmar", English: "Confirm", Français: "Confirmer", Polski: "Zatwierdź" }
};
window.SIGEC_I18N = SIGEC_I18N;
window.SIGEC_PHRASES_MAP = SIGEC_PHRASES_MAP;

/** Idioma ativo no sistema */
let currentSystemLanguage = 'Português';

/**
 * Normaliza o nome do idioma para os 5 suportados
 */
function normalizeLanguageName(lang) {
  if (!lang) return 'Português';
  const l = String(lang).trim().toLowerCase();
  if (l.startsWith('es') || l.includes('espan')) return 'Español';
  if (l.startsWith('en') || l.includes('engl') || l.includes('ingl')) return 'English';
  if (l.startsWith('fr') || l.includes('fran')) return 'Français';
  if (l.startsWith('pl') || l.includes('pol')) return 'Polski';
  return 'Português';
}
window.normalizeLanguageName = normalizeLanguageName;

/**
 * Obtém a tradução de uma chave ou frase
 */
function t(key, defaultText = '') {
  const lang = normalizeLanguageName(currentSystemLanguage);
  if (SIGEC_I18N[key]) {
    if (SIGEC_I18N[key][lang]) return SIGEC_I18N[key][lang];
    if (SIGEC_I18N[key]['Português']) return SIGEC_I18N[key]['Português'];
  }
  if (SIGEC_PHRASES_MAP[key]) {
    if (SIGEC_PHRASES_MAP[key][lang]) return SIGEC_PHRASES_MAP[key][lang];
  }
  return defaultText || key;
}
window.t = t;

/**
 * Obtém o idioma do utilizador atualmente com sessão iniciada
 */
function getActiveUserLanguage() {
  try {
    if (typeof ensureUsersInitialized === 'function') ensureUsersInitialized();
    const activeUserId = sessionStorage.getItem('sigec_pro_active_user_id');
    if (activeUserId && typeof db !== 'undefined' && Array.isArray(db.usuarios)) {
      const user = db.usuarios.find(u => u.id === activeUserId);
      if (user && user.idioma) return normalizeLanguageName(user.idioma);
    }
  } catch (e) {
    console.warn('Erro ao obter idioma do utilizador ativo:', e);
  }
  if (typeof window !== 'undefined' && window.currentSystemLanguage) {
    return normalizeLanguageName(window.currentSystemLanguage);
  }
  return 'Português';
}
window.getActiveUserLanguage = getActiveUserLanguage;

/**
 * Traduz texto com suporte inteligente a sufixos obrigatórios (*, :)
 */
function getTranslatedText(rawText, lang) {
  if (!rawText || !rawText.trim()) return rawText;
  const cleanRaw = rawText.replace(/\s+/g, ' ').trim();
  lang = normalizeLanguageName(lang);

  // 1. Prioridade para tradução exata da frase completa normalizada
  const direct = translateSystemTerm(cleanRaw, lang);
  if (direct && direct !== cleanRaw) {
    return direct;
  }

  // 2. Se não houver correspondência exata, verificar sufixos de asterisco ou dois pontos
  let text = cleanRaw;
  let suffix = '';
  if (text.endsWith(' *')) {
    suffix = ' *';
    text = text.slice(0, -2).trim();
  } else if (text.endsWith('*')) {
    suffix = ' *';
    text = text.slice(0, -1).trim();
  } else if (text.endsWith(':')) {
    suffix = (lang === 'Français' ? ' :' : ':');
    text = text.slice(0, -1).trim();
  }

  const trans = translateSystemTerm(text, lang);
  if (trans && trans !== text) {
    return trans + suffix;
  }

  return rawText;
}
window.getTranslatedText = getTranslatedText;

/**
 * Tradutor Automático de Textos do DOM (Recursivo e Completo)
 */
function translateDOMTree(rootNode, lang) {
  if (!rootNode) return;
  lang = normalizeLanguageName(lang);

  const textNodeType = (typeof Node !== 'undefined' ? Node.TEXT_NODE : 3);

  // 1. Tradução de nós de texto em elementos de interface, botões, formulários, dropzones e tabelas
  const elementsToTranslate = rootNode.querySelectorAll('h1, h2, h3, h4, h5, h6, label, button, th, td, span, p, .embedded-title, .card-title, .modal-title, .empty-state, .view-toggle-btn, .file-upload-dropzone, .file-upload-dropzone div, .modal-footer, .btn, .btn-secondary, .btn-primary, .btn-danger, .btn-close');
  elementsToTranslate.forEach(el => {
    if (el.closest && (el.closest('.kpi-number') || el.closest('#userActivityTimelineContainer'))) return;
    if (el.classList && el.classList.contains('budget-price-symbol')) return;
    if (el.hasAttribute && el.hasAttribute('data-i18n')) return;

    Array.from(el.childNodes).forEach(node => {
      if (node.nodeType === textNodeType) {
        const raw = node.textContent;
        const clean = raw.replace(/\s+/g, ' ').trim();
        if (!clean) return;
        let origTxt = node._origText;
        if (!origTxt) {
          origTxt = clean;
          node._origText = origTxt;
        }
        if (origTxt) {
          const leadSpace = raw.match(/^\s*/)?.[0] || '';
          const trailSpace = raw.match(/\s*$/)?.[0] || '';
          const translated = getTranslatedText(origTxt, lang);
          if (translated) {
            node.textContent = leadSpace + translated + trailSpace;
          }
        }
      }
    });
  });

  // 2. Tradução de opções de seleção (<select><option>)
  rootNode.querySelectorAll('select option').forEach(opt => {
    if (!opt.value && !opt.textContent) return;
    let origText = opt._origText;
    if (!origText) {
      origText = opt.textContent.replace(/\s+/g, ' ').trim();
      if (origText) opt._origText = origText;
    }
    if (origText) {
      const trans = translateSystemTerm(origText, lang);
      if (trans) opt.textContent = trans;
    }
  });

  // 3. Tradução de placeholders de inputs de interface e de formulários
  rootNode.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(inp => {
    if (inp.hasAttribute && inp.hasAttribute('data-i18n-placeholder')) return;
    let origPh = inp._origPlaceholder;
    if (!origPh) {
      origPh = (inp.getAttribute('placeholder') || '').replace(/\s+/g, ' ').trim();
      if (origPh && origPh !== '0.00' && origPh !== '0,00' && !origPh.startsWith('http') && !origPh.startsWith('ghp_')) {
        inp._origPlaceholder = origPh;
      }
    }
    if (origPh) {
      const trans = translateSystemTerm(origPh, lang);
      if (trans) inp.setAttribute('placeholder', trans);
    }
  });

  // 4. Tradução de títulos e tooltips (title)
  rootNode.querySelectorAll('[title]').forEach(el => {
    if (el.hasAttribute && el.hasAttribute('data-i18n-title')) return;
    let origTitle = el._origTitle;
    if (!origTitle) {
      origTitle = (el.getAttribute('title') || '').replace(/\s+/g, ' ').trim();
      if (origTitle) el._origTitle = origTitle;
    }
    if (origTitle) {
      const trans = translateSystemTerm(origTitle, lang);
      if (trans) el.setAttribute('title', trans);
    }
  });
}
window.translateDOMTree = translateDOMTree;

/**
 * Aplica o idioma em toda a interface do programa
 */
function applyUserLanguage(langName) {
  if (!langName) {
    langName = getActiveUserLanguage();
  }
  langName = normalizeLanguageName(langName);
  currentSystemLanguage = langName;

  // 1. Atualizar atributos data-i18n
  if (typeof document !== 'undefined') {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation && translation !== key) {
        el.textContent = translation;
      }
    });

    // 2. Atualizar placeholders data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = t(key);
      if (translation && translation !== key) {
        el.setAttribute('placeholder', translation);
      }
    });

    // 3. Atualizar títulos data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const translation = t(key);
      if (translation && translation !== key) {
        el.setAttribute('title', translation);
      }
    });

    // 4. Traduzir elementos estruturais específicos da interface
    translateSpecificInterfaceElements(langName);

    // 5. Traduzir árvore profunda do DOM
    if (document.body) {
      translateDOMTree(document.body, langName);
    }
  }
}
window.applyUserLanguage = applyUserLanguage;

function translateSpecificInterfaceElements(lang) {
  lang = normalizeLanguageName(lang);

  // Subtítulo da marca
  const brandSub = document.querySelector('.brand-subtitle');
  if (brandSub) brandSub.textContent = t('brand_subtitle');

  // Menu de navegação superior
  const navHomeSpan = document.querySelector('#navBtnHome span');
  if (navHomeSpan) navHomeSpan.textContent = t('nav_home');
  const navClientsSpan = document.querySelector('button[data-tab="tab-clientes"] span');
  if (navClientsSpan) navClientsSpan.textContent = t('nav_clients');
  const navContactsSpan = document.querySelector('button[data-tab="tab-contactos"] span');
  if (navContactsSpan) navContactsSpan.textContent = t('nav_contacts');
  const navProjectsSpan = document.querySelector('button[data-tab="tab-projetos"] span');
  if (navProjectsSpan) navProjectsSpan.textContent = t('nav_projects');
  const navBudgetsSpan = document.querySelector('button[data-tab="tab-orcamentos"] span');
  if (navBudgetsSpan) navBudgetsSpan.textContent = t('nav_budgets');
  const navConfigSpan = document.querySelector('#navBtnConfiguracao span');
  if (navConfigSpan) navConfigSpan.textContent = t('nav_config');

  // Botões de Guardar e Fechar no topo
  const btnSaveProg = document.getElementById('btnSaveProgramChanges');
  if (btnSaveProg) {
    const spans = btnSaveProg.querySelectorAll('.header-btn-text span');
    if (spans.length >= 2) {
      if (lang === 'Español') { spans[0].textContent = 'Guardar'; spans[1].textContent = 'Cambios'; }
      else if (lang === 'English') { spans[0].textContent = 'Save'; spans[1].textContent = 'Changes'; }
      else if (lang === 'Français') { spans[0].textContent = 'Enregistrer'; spans[1].textContent = 'Modifications'; }
      else if (lang === 'Polski') { spans[0].textContent = 'Zapisz'; spans[1].textContent = 'Zmiany'; }
      else { spans[0].textContent = 'Guardar'; spans[1].textContent = 'Alterações'; }
    }
  }

  const btnCloseApp = document.querySelector('.header-btn-close');
  if (btnCloseApp) {
    const spans = btnCloseApp.querySelectorAll('.header-btn-text span');
    if (spans.length >= 2) {
      if (lang === 'Español') { spans[0].textContent = 'Guardar y'; spans[1].textContent = 'Cerrar'; }
      else if (lang === 'English') { spans[0].textContent = 'Save &'; spans[1].textContent = 'Close'; }
      else if (lang === 'Français') { spans[0].textContent = 'Enregistrer &'; spans[1].textContent = 'Fermer'; }
      else if (lang === 'Polski') { spans[0].textContent = 'Zapisz i'; spans[1].textContent = 'Zamknij'; }
      else { spans[0].textContent = 'Guardar e'; spans[1].textContent = 'Fechar'; }
    }
  }

  // Pesquisa Global
  const searchCat = document.getElementById('searchCategory');
  if (searchCat) {
    const optClients = searchCat.querySelector('option[value="clientes"]');
    if (optClients) optClients.textContent = t('search_category_clients');
    const optContacts = searchCat.querySelector('option[value="contactos"]');
    if (optContacts) optContacts.textContent = t('search_category_contacts');
    const optProjects = searchCat.querySelector('option[value="projetos_nome"]');
    if (optProjects) optProjects.textContent = t('search_category_projects');
  }
  const globalSearchInp = document.getElementById('globalSearchQuery');
  if (globalSearchInp) globalSearchInp.placeholder = t('search_placeholder');

  // Ecrã de Login
  const loginTitle = document.querySelector('#loginFormMode h3');
  if (loginTitle) {
    loginTitle.innerHTML = `<i class="fa-solid fa-lock" style="color: #0284c7;"></i> ${t('login_system_title')}`;
  }
  const loginDesc = document.querySelector('#loginFormMode p');
  if (loginDesc) loginDesc.textContent = t('login_system_subtitle');

  const loginUserInput = document.getElementById('loginUserInput');
  if (loginUserInput) loginUserInput.placeholder = t('login_user_placeholder');
  const loginPinInput = document.getElementById('loginPinInput');
  if (loginPinInput) loginPinInput.placeholder = t('login_pin_placeholder');

  const btnLoginSubmit = document.querySelector('#loginFormMode button[type="submit"]');
  if (btnLoginSubmit) {
    btnLoginSubmit.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> ${t('login_btn_enter')}`;
  }
  const btnToggleReg = document.querySelector('#loginFormMode button[onclick*="toggleLoginRegisterMode(true)"]');
  if (btnToggleReg) {
    btnToggleReg.innerHTML = `<i class="fa-solid fa-user-plus"></i> ${t('login_register_new')}`;
  }

  // Ecrã de Auto-Registo
  const regTitle = document.querySelector('#registerFormMode h3');
  if (regTitle) {
    regTitle.innerHTML = `<i class="fa-solid fa-id-card" style="color: #0284c7;"></i> ${t('reg_title')}`;
  }
  const regBtnSubmit = document.querySelector('#registerFormMode button[type="submit"]');
  if (regBtnSubmit) {
    regBtnSubmit.innerHTML = `<i class="fa-solid fa-user-check"></i> ${t('reg_btn_submit')}`;
  }
  const regBtnBack = document.querySelector('#registerFormMode button[onclick*="toggleLoginRegisterMode(false)"]');
  if (regBtnBack) {
    regBtnBack.innerHTML = `<i class="fa-solid fa-arrow-left"></i> ${t('reg_btn_back')}`;
  }

  // Ficha do Utilizador (Modal)
  const tabBtnInfo = document.getElementById('tabBtnUserProfileInfo');
  if (tabBtnInfo) tabBtnInfo.innerHTML = `<i class="fa-solid fa-id-card"></i> ${t('profile_tab_info')}`;
  const tabBtnAct = document.getElementById('tabBtnUserProfileActivity');
  if (tabBtnAct) tabBtnAct.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i> ${t('profile_tab_activity')}`;

  const roleUserOpt = document.querySelector('#profileUserRole option[value="user"]');
  if (roleUserOpt) roleUserOpt.textContent = t('profile_role_option_user');
  const roleAdminOpt = document.querySelector('#profileUserRole option[value="admin"]');
  if (roleAdminOpt) roleAdminOpt.textContent = t('profile_role_option_admin');

  const cfgRoleUserOpt = document.querySelector('#cfgRegUserRole option[value="user"]');
  if (cfgRoleUserOpt) cfgRoleUserOpt.textContent = t('profile_role_option_user');
  const cfgRoleAdminOpt = document.querySelector('#cfgRegUserRole option[value="admin"]');
  if (cfgRoleAdminOpt) cfgRoleAdminOpt.textContent = t('profile_role_option_admin');

  const profileActiveSpan = document.querySelector('#profileUserActive + span');
  if (profileActiveSpan) profileActiveSpan.textContent = t('profile_active_label');
  const profileActiveP = document.querySelector('#profileUserActive')?.closest('div')?.querySelector('p');
  if (profileActiveP) profileActiveP.textContent = t('profile_active_desc');

  const profilePinH4 = document.querySelector('#userProfileModal h4');
  if (profilePinH4) profilePinH4.innerHTML = `<i class="fa-solid fa-key" style="color: #0284c7;"></i> ${t('profile_pin_section_title')}`;
  const profilePinP = profilePinH4?.parentElement?.querySelector('p');
  if (profilePinP) profilePinP.textContent = t('profile_pin_section_desc');

  const btnSendEmail = document.querySelector('#userProfileModal button[onclick*="sendPasswordResetEmailToUser"]');
  if (btnSendEmail) btnSendEmail.innerHTML = `<i class="fa-solid fa-envelope-circle-check"></i> ${t('profile_send_link_email')}`;

  const btnSaveProfile = document.querySelector('#userProfileModal button[type="submit"]');
  if (btnSaveProfile) btnSaveProfile.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> ${t('btn_save_user_profile')}`;

  // Separador de Orçamentação & Especificação Técnica
  const budgetMainH2 = document.querySelector('#tab-orcamentos h2');
  if (budgetMainH2) {
    budgetMainH2.innerHTML = `<i class="fa-solid fa-file-signature"></i> ${t('budget_main_heading', 'Orçamentação e Especificação Técnica')}`;
  }
  const budgetMainSubtitle = budgetMainH2?.parentElement?.querySelector('div');
  if (budgetMainSubtitle) {
    budgetMainSubtitle.textContent = t('budget_main_subtitle', 'Especificação detalhada de componentes e proposta comercial');
  }

  const lblModelPreset = document.querySelector('label[for="budgetModelPresetInput"]');
  if (lblModelPreset) lblModelPreset.textContent = t('budget_model_base_label', 'Modelo Base:');
  const inpModelPreset = document.getElementById('budgetModelPresetInput');
  if (inpModelPreset) inpModelPreset.placeholder = t('budget_model_base_placeholder', 'Escreva ou selecione um modelo/orçamento...');

  const budgetTotalLabel = document.querySelector('.budget-total-box span:first-child');
  if (budgetTotalLabel) budgetTotalLabel.textContent = t('budget_grand_total_label', 'Total Geral:');

  const budgetClientLabel = document.querySelector('label[for="budgetHeaderCliente"]');
  if (budgetClientLabel) budgetClientLabel.textContent = t('budget_client_label', 'Cliente *');
  const budgetClientInp = document.getElementById('budgetHeaderCliente');
  if (budgetClientInp) budgetClientInp.placeholder = t('budget_client_placeholder', 'Selecione ou introduza o Cliente...');

  const budgetRefLabel = document.querySelector('label[for="budgetHeaderRefCliente"]');
  if (budgetRefLabel) budgetRefLabel.textContent = t('budget_ref_label', 'Referência do Orçamento / Projeto');

  const budgetDateLabel = document.querySelector('label[for="budgetHeaderData"]');
  if (budgetDateLabel) budgetDateLabel.textContent = t('budget_date_label', 'Data da Proposta');

  const budgetImgsTitle = document.querySelector('#tab-orcamentos .budget-images-card h3');
  if (budgetImgsTitle) budgetImgsTitle.textContent = t('budget_images_title', 'Imagens e Plantas Técnicas da Proposta');
  const budgetImgsSub = budgetImgsTitle?.parentElement?.querySelector('div');
  if (budgetImgsSub) budgetImgsSub.textContent = t('budget_images_subtitle');

  const btnAddChapter = document.querySelector('button[onclick*="addNewBudgetTopicCard"]');
  if (btnAddChapter) btnAddChapter.innerHTML = `<i class="fa-solid fa-plus"></i> ${t('budget_btn_add_chapter', 'Adicionar Mais um Quadro / Capítulo')}`;

  const budgetHistoryTitle = document.querySelector('#tab-orcamentos .card-title');
  if (budgetHistoryTitle && budgetHistoryTitle.querySelector('.fa-clock-rotate-left')) {
    budgetHistoryTitle.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i> ${t('budget_history_title', 'Histórico de Orçamentos Guardados (Independentes)')}`;
  }

  // Tooltips dos Botões de Ação do Orçamento
  const btnPrintPdf = document.querySelector('button[onclick*="printBudgetPDF"]');
  if (btnPrintPdf) btnPrintPdf.title = t('budget_btn_print_pdf', 'Imprimir / Exportar em PDF');
  const btnExpWord = document.querySelector('button[onclick*="exportBudgetToWord"]');
  if (btnExpWord) btnExpWord.title = t('budget_btn_export_word', 'Exportar para Microsoft Word (.doc)');
  const btnSaveBgt = document.querySelector('button[onclick*="saveGeneratedBudget"]');
  if (btnSaveBgt) btnSaveBgt.title = t('budget_btn_save', 'Guardar Orçamento');
  const btnDupBgt = document.querySelector('button[onclick*="duplicateCurrentBudget"]');
  if (btnDupBgt) btnDupBgt.title = t('budget_btn_duplicate', 'Duplicar Orçamento Atual (Gera cópia no formulário com novo número)');
  const btnClrBgt = document.querySelector('button[onclick*="clearBudgetForm"]');
  if (btnClrBgt) btnClrBgt.title = t('budget_btn_clear', 'Limpar todos os campos');

  // Cabeçalhos das tabelas de orçamento
  document.querySelectorAll('#tab-orcamentos .budget-table thead tr').forEach(tr => {
    const ths = tr.querySelectorAll('th');
    if (ths.length >= 3) {
      ths[0].textContent = t('budget_th_item', 'Item / Componente');
      ths[1].textContent = t('budget_th_desc_tech', 'Descrição / Especificação Técnica');
      ths[2].textContent = t('budget_th_price', 'Preço (€)');
    }
  });

  const optTableThs = document.querySelectorAll('#budgetOptionalTable thead th');
  if (optTableThs.length >= 3) {
    optTableThs[0].textContent = t('budget_th_opt_item', 'Item / Componente Opcional');
    optTableThs[1].textContent = t('budget_th_desc_tech', 'Descrição / Especificação Técnica');
    optTableThs[2].textContent = t('budget_th_opt_price', 'Preço Opcional (€)');
  }

  // Linhas das tabelas de orçamento (Nomes de Itens e Placeholders)
  document.querySelectorAll('#tab-orcamentos .budget-table tbody tr').forEach(tr => {
    // 1. Coluna de Item (primeiro td se não tiver input de edição)
    const firstTd = tr.querySelector('td:first-child');
    if (firstTd && !firstTd.querySelector('input.budget-input-item-name')) {
      Array.from(firstTd.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          let orig = node._origItemText;
          if (!orig) {
            orig = node.textContent.trim();
            if (orig) node._origItemText = orig;
          }
          if (orig && SIGEC_PHRASES_MAP[orig]) {
            if (lang === 'Português') {
              node.textContent = ' ' + orig;
            } else if (SIGEC_PHRASES_MAP[orig][lang]) {
              node.textContent = ' ' + SIGEC_PHRASES_MAP[orig][lang];
            }
          }
        }
      });
    }

    // 2. Placeholders dos inputs da linha (descrição e nome de item se houver)
    tr.querySelectorAll('input.budget-input-desc, input.budget-input-item-name').forEach(inp => {
      let origPh = inp._origPlaceholder || inp.getAttribute('data-orig-placeholder');
      if (!origPh) {
        origPh = inp.getAttribute('placeholder') || '';
        if (origPh && origPh !== '0.00' && origPh !== '0,00') {
          inp._origPlaceholder = origPh;
          inp.setAttribute('data-orig-placeholder', origPh);
        }
      }
      if (origPh && SIGEC_PHRASES_MAP[origPh]) {
        if (lang === 'Português') {
          inp.setAttribute('placeholder', origPh);
        } else if (SIGEC_PHRASES_MAP[origPh][lang]) {
          inp.setAttribute('placeholder', SIGEC_PHRASES_MAP[origPh][lang]);
        }
      }
    });
  });
}
window.translateSpecificInterfaceElements = translateSpecificInterfaceElements;

// Dicionário e gerador internacional para Documentos Formais de Orçamento (PDF / Word)
function getBudgetDocumentI18n(lang) {
  lang = normalizeLanguageName(lang || currentSystemLanguage);

  const dict = {
    Português: {
      htmlLang: 'pt',
      docTitle: (ref, cliente) => `Proposta Técnica ${ref} - ${cliente}`,
      companySub: 'Design e Fabrico de Unidades Móveis Técnicas',
      dateLabel: 'Data:',
      clientLabel: 'Cliente:',
      projectLabel: 'Projeto:',
      docVersionSub: (setor) => `Design personalizado e produção «chave na mão» de uma ${setor}, com base num veículo novo incluído na proposta. Versão 1.0.`,
      descWorksTitle: '1. Descrição dos Trabalhos:',
      techSpecsTitle: '2. Especificações Técnicas e Orçamentação por Capítulo:',
      thItem: 'Item / Componente',
      thDesc: 'Descrição / Especificação Técnica',
      thPrice: 'Preço (€)',
      priceIncluded: 'Incluído',
      priceOptional: 'Opcional',
      econEvalTitle: '3. Avaliação Económica:',
      grandTotalProposed: 'VALOR TOTAL GLOBAL PROPOSTO (S/ IVA):',
      econDescBase: 'Veículo base novo e transformação integral «chave na mão» com instalação de mobiliário técnico, revestimentos termoacústicos, divisórias e todos os equipamentos descritos no presente caderno de encargos:',
      econDescElectrical: 'Sistema proposto de alimentação elétrica através de baterias de lítio, inversor/carregador, alimentação a partir do alternador do veículo e painéis solares (incluídos):',
      econDescTransfer: (dest) => `Trâmites de transferência para o cliente, transporte e entrega assegurado em ${dest}:`,
      optionalHeader: 'Equipamentos Opcionais',
      paymentTermsTitle: 'Condições de Pagamento:',
      paymentTermsText: '50% com a adjudicação e encomenda; 40% com a chegada do veículo à fábrica; 10% com a receção e entrega final.',
      termsConditionsTitle: '4. Prazo de Entrega, Garantia e Condições Comerciais:',
      deliveryTimeLabel: '• Prazo de entrega:',
      deliveryTimeText: (meses) => `Máximo: <strong>${meses} meses</strong> após a aprovação formal do orçamento e disponibilização do veículo base pelo fabricante.`,
      techWarrantyLabel: '• Garantia técnica:',
      techWarrantyText: 'Garantia técnica dos equipamentos e dispositivos durante o período estipulado por cada fabricante (normalmente <strong>2 anos</strong>) e de <strong>um (1) ano</strong> para todos os trabalhos de transformação e instalação executados pela nossa parte.',
      validityLabel: '• Validade da proposta:',
      validityText: 'O presente orçamento tem uma <strong>validade de 2 (dois) meses</strong> a contar da respetiva data de emissão.',
      transportLabel: '• Trâmites e Transporte:',
      transportText: 'Inclui trâmites de transferência para o cliente e transporte/entrega assegurado no porto ou localidade de destino acordado.',
      notesTitle: 'Notas:',
      noteVat: 'Os orçamentos apresentados não incluem o I.V.A. correspondente.',
      noteEquipment: 'Não inclui equipamento interior específico do cliente não definido expressamente nesta proposta.',
      noteMobility: 'Não inclui qualquer serviço de mobilidade pós-entrega, combustível ou portagens.',
      noteIso: 'Produção e processos industriais auditados e certificados de acordo com a Norma <strong>ISO 9001:2015 Bureau Veritas</strong>.',
      contactPersonLabel: 'Pessoa de contacto: José Centurio',
      signatureStamp: 'Assinatura e Carimbo Oficial',
      pageLabel: 'Página',
      commercialConditionsHeader: 'alegría-activity • Condições Comerciais e Certificação',
      wordExportSuccess: 'Ficheiro Word (.doc) do Orçamento exportado com sucesso!'
    },
    Español: {
      htmlLang: 'es',
      docTitle: (ref, cliente) => `Propuesta Técnica ${ref} - ${cliente}`,
      companySub: 'Diseño y Fabricación de Unidades Móviles Técnicas',
      dateLabel: 'Fecha:',
      clientLabel: 'Cliente:',
      projectLabel: 'Proyecto:',
      docVersionSub: (setor) => `Diseño personalizado y producción «llave en mano» de una ${setor}, sobre la base de un vehículo nuevo incluido en la propuesta. Versión 1.0.`,
      descWorksTitle: '1. Descripción de los Trabajos:',
      techSpecsTitle: '2. Especificaciones Técnicas y Presupuestación por Capítulo:',
      thItem: 'Ítem / Componente',
      thDesc: 'Descripción / Especificación Técnica',
      thPrice: 'Precio (€)',
      priceIncluded: 'Incluido',
      priceOptional: 'Opcional',
      econEvalTitle: '3. Evaluación Económica:',
      grandTotalProposed: 'VALOR TOTAL GLOBAL PROPUESTO (SIN IVA):',
      econDescBase: 'Vehículo base nuevo y transformación integral «llave en mano» con instalación de mobiliario técnico, revestimientos termoacústicos, mamparas y todos los equipos descritos en el presente pliego:',
      econDescElectrical: 'Sistema propuesto de alimentación eléctrica mediante baterías de litio, inversor/cargador, alternador del vehículo y paneles solares (incluidos):',
      econDescTransfer: (dest) => `Trámites de transferencia al cliente, transporte y entrega asegurada en ${dest}:`,
      optionalHeader: 'Equipamientos Opcionales',
      paymentTermsTitle: 'Condiciones de Pago:',
      paymentTermsText: '50% con la adjudicación y pedido; 40% con la llegada del vehículo a fábrica; 10% con la recepción y entrega final.',
      termsConditionsTitle: '4. Plazo de Entrega, Garantía y Condiciones Comerciales:',
      deliveryTimeLabel: '• Plazo de entrega:',
      deliveryTimeText: (meses) => `Máximo: <strong>${meses} meses</strong> tras la aprobación formal del presupuesto y puesta a disposición del vehículo base por el fabricante.`,
      techWarrantyLabel: '• Garantía técnica:',
      techWarrantyText: 'Garantía técnica de los equipos y dispositivos durante el período estipulado por cada fabricante (normalmente <strong>2 años</strong>) y de <strong>un (1) año</strong> para todos los trabajos de transformación e instalación ejecutados por nuestra parte.',
      validityLabel: '• Validez de la propuesta:',
      validityText: 'El presente presupuesto tiene una <strong>validez de 2 (dos) meses</strong> a partir de su fecha de emisión.',
      transportLabel: '• Trámites y Transporte:',
      transportText: 'Incluye trámites de transferencia al cliente y transporte/entrega asegurado en el puerto o localidad de destino acordado.',
      notesTitle: 'Notas:',
      noteVat: 'Los presupuestos presentados no incluyen el I.V.A. correspondiente.',
      noteEquipment: 'No incluye equipamiento interior específico del cliente no definido expresamente en esta propuesta.',
      noteMobility: 'No incluye ningún servicio de movilidad post-entrega, combustible o peajes.',
      noteIso: 'Producción y procesos industriales auditados y certificados según la Norma <strong>ISO 9001:2015 Bureau Veritas</strong>.',
      contactPersonLabel: 'Persona de contacto: José Centurio',
      signatureStamp: 'Firma y Sello Oficial',
      pageLabel: 'Página',
      commercialConditionsHeader: 'alegría-activity • Condiciones Comerciales y Certificación',
      wordExportSuccess: '¡Archivo Word (.doc) del Presupuesto exportado con éxito!'
    },
    English: {
      htmlLang: 'en',
      docTitle: (ref, cliente) => `Technical Proposal ${ref} - ${cliente}`,
      companySub: 'Design and Manufacturing of Technical Mobile Units',
      dateLabel: 'Date:',
      clientLabel: 'Client:',
      projectLabel: 'Project:',
      docVersionSub: (setor) => `Custom turnkey design and production of a ${setor}, based on a brand-new vehicle included in the proposal. Version 1.0.`,
      descWorksTitle: '1. Description of Works:',
      techSpecsTitle: '2. Technical Specifications and Budget by Chapter:',
      thItem: 'Item / Component',
      thDesc: 'Description / Technical Specification',
      thPrice: 'Price (€)',
      priceIncluded: 'Included',
      priceOptional: 'Optional',
      econEvalTitle: '3. Economic Evaluation:',
      grandTotalProposed: 'PROPOSED GRAND TOTAL VALUE (EXCL. VAT):',
      econDescBase: 'New base vehicle and complete turnkey conversion including technical furniture installation, thermo-acoustic linings, partitions and all equipment described in these specifications:',
      econDescElectrical: 'Proposed electrical power supply system with lithium batteries, inverter/charger, vehicle alternator feed and solar panels (included):',
      econDescTransfer: (dest) => `Transfer formalities to the client, transport and delivery assured at ${dest}:`,
      optionalHeader: 'Optional Equipment',
      paymentTermsTitle: 'Payment Terms:',
      paymentTermsText: '50% upon contract award and order; 40% upon vehicle arrival at the factory; 10% upon final acceptance and delivery.',
      termsConditionsTitle: '4. Delivery Time, Warranty and Commercial Terms:',
      deliveryTimeLabel: '• Delivery time:',
      deliveryTimeText: (meses) => `Maximum: <strong>${meses} months</strong> after formal budget approval and base vehicle availability from the manufacturer.`,
      techWarrantyLabel: '• Technical warranty:',
      techWarrantyText: 'Technical warranty for equipment and devices according to each manufacturer (normally <strong>2 years</strong>) and <strong>one (1) year</strong> for all transformation and installation works carried out by our team.',
      validityLabel: '• Proposal validity:',
      validityText: 'This proposal is <strong>valid for 2 (two) months</strong> from its date of issuance.',
      transportLabel: '• Formalities and Transport:',
      transportText: 'Includes transfer formalities to the client and insured transport/delivery to the agreed port or destination location.',
      notesTitle: 'Notes:',
      noteVat: 'Prices shown do not include applicable V.A.T.',
      noteEquipment: 'Does not include client-specific interior equipment not expressly defined in this proposal.',
      noteMobility: 'Does not include post-delivery mobility services, fuel or tolls.',
      noteIso: 'Manufacturing and industrial processes audited and certified in accordance with <strong>ISO 9001:2015 Bureau Veritas</strong> Standard.',
      contactPersonLabel: 'Contact Person: José Centurio',
      signatureStamp: 'Official Signature and Stamp',
      pageLabel: 'Page',
      commercialConditionsHeader: 'alegría-activity • Commercial Conditions and Certification',
      wordExportSuccess: 'Budget Word document (.doc) exported successfully!'
    },
    Français: {
      htmlLang: 'fr',
      docTitle: (ref, cliente) => `Proposition Technique ${ref} - ${cliente}`,
      companySub: 'Conception et Fabrication d\'Unités Mobiles Techniques',
      dateLabel: 'Date :',
      clientLabel: 'Client :',
      projectLabel: 'Projet :',
      docVersionSub: (setor) => `Conception personnalisée et production « clé en main » d'une ${setor}, sur la base d'un véhicule neuf inclus dans la proposition. Version 1.0.`,
      descWorksTitle: '1. Description des Travaux :',
      techSpecsTitle: '2. Spécifications Techniques et Budgétisation par Chapitre :',
      thItem: 'Article / Composant',
      thDesc: 'Description / Spécification Technique',
      thPrice: 'Prix (€)',
      priceIncluded: 'Inclus',
      priceOptional: 'Optionnel',
      econEvalTitle: '3. Évaluation Économique :',
      grandTotalProposed: 'VALEUR TOTALE GLOBALE PROPOSÉE (HT) :',
      econDescBase: 'Véhicule de base neuf et transformation intégrale « clé en main » avec installation de mobilier technique, revêtements thermo-acoustiques, cloisons et tous les équipements décrits dans ce cahier des charges :',
      econDescElectrical: 'Système proposé d\'alimentation électrique par batteries lithium, onduleur/chargeur, alternateur du véhicule et panneaux solaires (inclus) :',
      econDescTransfer: (dest) => `Démarches de transfert au client, transport et livraison sécurisée à ${dest} :`,
      optionalHeader: 'Équipements Optionnels',
      paymentTermsTitle: 'Conditions de Paiement :',
      paymentTermsText: '50 % à la commande et attribution ; 40 % à l\'arrivée du véhicule à l\'usine ; 10 % à la réception et livraison finale.',
      termsConditionsTitle: '4. Délai de Livraison, Garantie et Conditions Commerciales :',
      deliveryTimeLabel: '• Délai de livraison :',
      deliveryTimeText: (meses) => `Maximum : <strong>${meses} mois</strong> après approbation formelle du devis et mise à disposition du véhicule de base par le constructeur.`,
      techWarrantyLabel: '• Garantie technique :',
      techWarrantyText: 'Garantie technique des équipements selon chaque constructeur (généralement <strong>2 ans</strong>) et de <strong>un (1) an</strong> sur tous les travaux de transformation et d\'installation réalisés par nos soins.',
      validityLabel: '• Validité de la proposition :',
      validityText: 'Ce devis a une <strong>validité de 2 (deux) mois</strong> à compter de sa date d\'émission.',
      transportLabel: '• Démarches et Transport :',
      transportText: 'Comprend les démarches de transfert au client et le transport/livraison assuré au port ou lieu de destination convenu.',
      notesTitle: 'Notes :',
      noteVat: 'Les devis présentés n\'incluent pas la T.V.A. correspondante.',
      noteEquipment: 'N\'inclut pas d\'équipement intérieur spécifique du client non expressément défini dans cette proposition.',
      noteMobility: 'N\'inclut aucun service de mobilité post-livraison, carburant ou péages.',
      noteIso: 'Production et processus industriels audités et certifiés selon la Norme <strong>ISO 9001:2015 Bureau Veritas</strong>.',
      contactPersonLabel: 'Personne de contact : José Centurio',
      signatureStamp: 'Signature et Cachet Officiel',
      pageLabel: 'Page',
      commercialConditionsHeader: 'alegría-activity • Conditions Commerciales et Certification',
      wordExportSuccess: 'Fichier Word (.doc) du Devis exporté avec succès !'
    },
    Polski: {
      htmlLang: 'pl',
      docTitle: (ref, cliente) => `Oferta Techniczna ${ref} - ${cliente}`,
      companySub: 'Projektowanie i Produkcja Mobilnych Jednostek Technicznych',
      dateLabel: 'Data:',
      clientLabel: 'Klient:',
      projectLabel: 'Projekt:',
      docVersionSub: (setor) => `Indywidualny projekt i produkcja „pod klucz” ${setor}, na bazie nowego pojazdu zawartego w ofercie. Wersja 1.0.`,
      descWorksTitle: '1. Opis Prac:',
      techSpecsTitle: '2. Specyfikacje Techniczne i Wycena według Rozdziałów:',
      thItem: 'Pozycja / Komponent',
      thDesc: 'Opis / Specyfikacja Techniczna',
      thPrice: 'Cena (€)',
      priceIncluded: 'W cenie',
      priceOptional: 'Opcjonalnie',
      econEvalTitle: '3. Ocena Ekonomiczna:',
      grandTotalProposed: 'PROPONOWANA WARTOŚĆ CAŁKOWITA (BEZ VAT):',
      econDescBase: 'Nowy pojazd bazowy i pełna zabudowa „pod klucz” wraz z montażem mebli technicznych, okładzin termo-akustycznych, ścianek działowych i całego wyposażenia opisanego w specyfikacji:',
      econDescElectrical: 'Proponowany system zasilania elektrycznego z bateriami litowymi, falownikiem/ładowarką, alternatorem pojazdu i panelami słonecznymi (w cenie):',
      econDescTransfer: (dest) => `Formalności rejestracyjne, transport i bezpieczna dostawa do ${dest}:`,
      optionalHeader: 'Wyposażenie Opcjonalne',
      paymentTermsTitle: 'Warunki Płatności:',
      paymentTermsText: '50% przy zamówieniu i podpisaniu umowy; 40% po przybyciu pojazdu do fabryki; 10% przy odbiorze i dostawie końcowej.',
      termsConditionsTitle: '4. Czas Dostawy, Gwarancja i Warunki Handlowe:',
      deliveryTimeLabel: '• Czas dostawy:',
      deliveryTimeText: (meses) => `Maksymalnie: <strong>${meses} miesięcy</strong> po formalnym zatwierdzeniu wyceny i udostępnieniu pojazdu bazowego przez producenta.`,
      techWarrantyLabel: '• Gwarancja techniczna:',
      techWarrantyText: 'Gwarancja techniczna na urządzenia zgodnie z warunkami producenta (zwykle <strong>2 lata</strong>) oraz <strong>jeden (1) rok</strong> na wszystkie prace zabudowy i instalacji wykonane przez naszą firmę.',
      validityLabel: '• Ważność oferty:',
      validityText: 'Niniejsza oferta jest <strong>ważna przez 2 (dwa) miesiące</strong> od daty wystawienia.',
      transportLabel: '• Formalności i Transport:',
      transportText: 'Obejmuje formalności rejestracyjne oraz ubezpieczony transport/dostawę do uzgodnionego portu lub miejsca docelowego.',
      notesTitle: 'Uwagi:',
      noteVat: 'Przedstawione ceny nie zawierają podatku VAT.',
      noteEquipment: 'Nie obejmuje specyficznego wyposażenia klienta niewymienionego wyraźnie w ofercie.',
      noteMobility: 'Nie obejmuje usług mobilności po dostawie, paliwa ani opłat drogowych.',
      noteIso: 'Produkcja i procesy przemysłowe audytowane i certyfikowane zgodnie z normą <strong>ISO 9001:2015 Bureau Veritas</strong>.',
      contactPersonLabel: 'Osoba kontaktowa: José Centurio',
      signatureStamp: 'Podpis i Pieczęć Oficjalna',
      pageLabel: 'Strona',
      commercialConditionsHeader: 'alegría-activity • Warunki Handlowe i Certyfikacja',
      wordExportSuccess: 'Plik Word (.doc) wyceny został pomyślnie wyeksportowany!'
    }
  };

  return dict[lang] || dict['Português'];
}
window.getBudgetDocumentI18n = getBudgetDocumentI18n;

let i18nObserverTimeout = null;
let isApplyingI18n = false;

function setupI18nMutationObserver() {
  if (typeof MutationObserver === 'undefined') return;
  const observer = new MutationObserver((mutations) => {
    if (currentSystemLanguage !== 'Português' && !isApplyingI18n) {
      if (i18nObserverTimeout) clearTimeout(i18nObserverTimeout);
      i18nObserverTimeout = setTimeout(() => {
        isApplyingI18n = true;
        applyUserLanguage(currentSystemLanguage);
        setTimeout(() => { isApplyingI18n = false; }, 50);
      }, 60);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

// Iniciar ao carregar o documento
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        applyUserLanguage();
        setupI18nMutationObserver();
      }, 100);
    });
  } else {
    setTimeout(() => {
      applyUserLanguage();
      setupI18nMutationObserver();
    }, 100);
  }
}


/**
 * Traduz qualquer termo do sistema (estados, tipos, categorias, opções, capítulos, itens, cargos, países)
 * de qualquer idioma para o idioma alvo (targetLang)
 */
function translateSystemTerm(term, targetLang) {
  if (!term || typeof term !== 'string') return term;
  const cleanTerm = term.trim();
  if (!cleanTerm) return term;

  const normalizedLang = normalizeLanguageName(targetLang);

  // 1. Verificar em SIGEC_PHRASES_MAP direto
  if (SIGEC_PHRASES_MAP[cleanTerm]) {
    return SIGEC_PHRASES_MAP[cleanTerm][normalizedLang] || cleanTerm;
  }

  // 2. Procurar em SIGEC_PHRASES_MAP reversamente (caso o termo já esteja em outro idioma)
  for (const [ptKey, translations] of Object.entries(SIGEC_PHRASES_MAP)) {
    if (!translations || typeof translations !== 'object') continue;
    if (ptKey.toLowerCase() === cleanTerm.toLowerCase()) {
      return translations[normalizedLang] || ptKey;
    }
    for (const [langKey, langVal] of Object.entries(translations)) {
      if (typeof langVal === 'string' && langVal.toLowerCase() === cleanTerm.toLowerCase()) {
        if (normalizedLang === 'Português') return ptKey;
        return translations[normalizedLang] || langVal;
      }
    }
  }

  // 3. Procurar em SIGEC_TRANSLATIONS
  if (typeof SIGEC_TRANSLATIONS !== 'undefined') {
    for (const [transKey, translations] of Object.entries(SIGEC_TRANSLATIONS)) {
      if (!translations || typeof translations !== 'object') continue;
      for (const [langKey, langVal] of Object.entries(translations)) {
        if (typeof langVal === 'string' && langVal.toLowerCase() === cleanTerm.toLowerCase()) {
          return translations[normalizedLang] || langVal;
        }
      }
    }
  }

  return cleanTerm;
}
window.translateSystemTerm = translateSystemTerm;

/**
 * Traduz uma entidade completa (Cliente, Contacto, Projeto, Orçamento)
 * para o idioma do utilizador de destino (targetLang)
 */
function translateEntityForTargetUser(entityType, entityObj, targetLang) {
  if (!entityObj || typeof entityObj !== 'object' || !targetLang) return entityObj;
  const lang = normalizeLanguageName(targetLang);

  if (entityType === 'cliente') {
    // Preservar tipoCliente estrutural intacto sem alteração de valor de base de dados
    if (entityObj.pais) {
      entityObj.pais = translateSystemTerm(entityObj.pais, lang);
    }
    if (Array.isArray(entityObj.separadores)) {
      entityObj.separadores.forEach(sep => {
        if (sep.tipoSeparador) {
          sep.tipoSeparador = translateSystemTerm(sep.tipoSeparador, lang);
        }
      });
    }
  } else if (entityType === 'contacto') {
    if (entityObj.cargo) {
      entityObj.cargo = translateSystemTerm(entityObj.cargo, lang);
    }
    if (entityObj.departamento) {
      entityObj.departamento = translateSystemTerm(entityObj.departamento, lang);
    }
    if (entityObj.pais) {
      entityObj.pais = translateSystemTerm(entityObj.pais, lang);
    }
  } else if (entityType === 'projeto') {
    if (entityObj.estado) {
      entityObj.estado = translateSystemTerm(entityObj.estado, lang);
    }
    if (entityObj.tipo) {
      entityObj.tipo = translateSystemTerm(entityObj.tipo, lang);
    }
    if (entityObj.fase) {
      entityObj.fase = translateSystemTerm(entityObj.fase, lang);
    }
  } else if (entityType === 'orcamento') {
    if (entityObj.modeloBase) {
      entityObj.modeloBase = translateSystemTerm(entityObj.modeloBase, lang);
    }
    if (Array.isArray(entityObj.capitulos)) {
      entityObj.capitulos.forEach(cap => {
        if (cap.titulo) cap.titulo = translateSystemTerm(cap.titulo, lang);
        if (Array.isArray(cap.linhas)) {
          cap.linhas.forEach(line => {
            if (line.itemLabel) line.itemLabel = translateSystemTerm(line.itemLabel, lang);
            if (line.desc) line.desc = translateSystemTerm(line.desc, lang);
          });
        }
      });
    }
  }

  return entityObj;
}
window.translateEntityForTargetUser = translateEntityForTargetUser;

/**
 * Traduz o cliente e todos os seus registos vinculados (contactos, projetos, orçamentos)
 * para o idioma do utilizador de destino quando ocorre uma transferência comercial
 */
function translateClientAndLinkedDataForUser(clientObj, targetUserId) {
  if (!clientObj || !targetUserId) return;
  const database = (typeof db !== 'undefined' && db) ? db : ((typeof window !== 'undefined' && window.db) ? window.db : ((typeof global !== 'undefined' && global.db) ? global.db : null));
  if (!database) return;
  const targetUser = (database.usuarios || []).find(u => u.id === targetUserId);
  if (!targetUser || !targetUser.idioma) return;
  const targetLang = normalizeLanguageName(targetUser.idioma);

  // 1. Traduzir a Ficha do Cliente
  translateEntityForTargetUser('cliente', clientObj, targetLang);

  const clientId = clientObj.id;

  // 2. Traduzir todos os Contactos vinculados
  if (Array.isArray(database.contactos)) {
    database.contactos.forEach(con => {
      if (con.clienteId === clientId || (con.empresa && clientObj.nome && con.empresa.toLowerCase().trim() === clientObj.nome.toLowerCase().trim())) {
        translateEntityForTargetUser('contacto', con, targetLang);
      }
    });
  }

  // 3. Traduzir todos os Projetos vinculados
  if (Array.isArray(database.projetos)) {
    database.projetos.forEach(p => {
      if (p.clienteId === clientId || (p.cliente && clientObj.nome && p.cliente.toLowerCase().trim() === clientObj.nome.toLowerCase().trim())) {
        translateEntityForTargetUser('projeto', p, targetLang);
      }
    });
  }

  // 4. Traduzir todos os Orçamentos vinculados
  if (Array.isArray(database.orcamentos)) {
    database.orcamentos.forEach(b => {
      if (b.clienteId === clientId || (b.cliente && clientObj.nome && b.cliente.toLowerCase().trim() === clientObj.nome.toLowerCase().trim())) {
        translateEntityForTargetUser('orcamento', b, targetLang);
      }
    });
  }
}
window.translateClientAndLinkedDataForUser = translateClientAndLinkedDataForUser;
