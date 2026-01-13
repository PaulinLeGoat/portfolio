// Données des projets
const projects = [
    {
        id: "Sauvegarde",
        title: "Projet de Stratégies de Sauvegarde et Reprise d'Activité S5",
        context: "Conception et implémentation d'une politique de sauvegarde multi-niveaux pour assurer la continuité d'activité et la protection des données d'entreprise.",
        description: `
            <h3>Projet Backup & Disaster Recovery - Windows et Veeam</h3>
            <p><strong>Contexte</strong> Conception et implémentation d'une politique de sauvegarde multi-niveaux pour assurer la continuité d'activité et la protection des données d'entreprise.</p>
            
            <h4>Description</h4>
            <p>J'ai élaboré une stratégie de sauvegarde 3-2-1 en utilisant plusieurs technologies. J'ai d'abord développé des scripts Batch automatisés pour gérer des cycles de sauvegardes (Quotidien, Hebdomadaire, Mensuel) avec rétention et purge automatique vers un NAS via le réseau.</p>
            
            <p>Ensuite, j'ai intégré un stockage iSCSI sur un NAS TrueNAS connecté à un serveur Windows pour utiliser la fonctionnalité "Windows Server Backup". Enfin, j'ai déployé Veeam Backup & Replication pour gérer la sauvegarde de machines virtuelles (Hyper-V/VMware). J'ai configuré des jobs avec la méthode GFS (Grandfather-Father-Son), testé la restauration granulaire de fichiers ainsi que la restauration complète de VMs (Bare Metal) pour valider le plan de reprise d'activité (PRA).</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC24.02 | Assurer la sécurité des données - Implémentation de stratégies de sauvegarde et rétention des données</li>
                <li>AC33.01 | Créer des processus de traitement automatisé - Scripting des tâches planifiées de sauvegarde et purge</li>
                <li>AC23.02 | Utiliser des serveurs et des services réseaux virtualisés - Sauvegarde et restauration de machines virtuelles avec Veeam</li>
                <li>AC33.02 | Configurer un serveur et des services réseaux de manière avancée - Configuration de cibles iSCSI et intégration NAS</li>
            </ul>
        `,
        tags: ["Veeam", "Windows Server", "TrueNAS", "iSCSI", "Scripting Batch", "PRA", "Sauvegarde"]
    },
    {
        id: "Supervision",
        title: "Projet Supervision d’Infrastructures S5",
        context: "Mise en œuvre d'une solution de supervision hybride pour monitorer à la fois des équipements réseaux, des serveurs Linux et des conteneurs applicatifs.",
        description: `
            <h3>Projet Monitoring - De SNMP à Prometheus/Grafana</h3>
            <p><strong>Contexte</strong> Mise en œuvre d'une solution de supervision hybride pour monitorer à la fois des équipements réseaux, des serveurs Linux et des conteneurs applicatifs.</p>
            
            <h4>Description</h4>
            <p>J'ai mis en place une architecture de supervision complète. D'une part, j'ai configuré le protocole SNMP (v2/v3) sur des serveurs Linux et commutateurs Cisco pour remonter les métriques systèmes et réseaux via l'analyse des MIBs. D'autre part, j'ai déployé une stack moderne composée de Prometheus et Grafana.</p>
            
            <p>J'ai configuré des "exporters" spécifiques : Node Exporter pour les métriques serveurs, cAdvisor pour la surveillance de la consommation des ressources des conteneurs Docker, et Blackbox Exporter pour le monitoring de disponibilité des services Web (HTTP/DNS). J'ai conçu des tableaux de bord (Dashboards) Grafana personnalisés pour visualiser l'état de santé de l'infrastructure et configuré des alertes par mail en cas d'incident critique.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC23.01 | Concevoir et développer des applications communicantes - Configuration des agents SNMP et des scrapers Prometheus</li>
                <li>AC33.02 | Configurer un serveur et des services réseaux de manière avancée - Mise en place de la stack de monitoring Prometheus/Grafana</li>
                <li>AC23.02 | Utiliser des serveurs et des services réseaux virtualisés - Supervision des conteneurs Docker via cAdvisor</li>
                <li>AC33.01 | Créer des processus de traitement automatisé - Configuration des règles d'alerting automatique</li>
            </ul>
        `,
        tags: ["Prometheus", "Grafana", "SNMP", "Docker", "cAdvisor", "Supervision", "Linux"]
    },
    {
        id: "Powershell-AD",
        title: "Projet Automatisation PowerShell pour Active Directory S5",
        context: "Développement de scripts pour automatiser la gestion du cycle de vie des utilisateurs et l'administration massive de l'Active Directory.",
        description: `
            <h3>Projet PowerShell - Scripting et Automatisation Administrative</h3>
            <p><strong>Contexte</strong> Développement de scripts pour automatiser la gestion du cycle de vie des utilisateurs et l'administration massive de l'Active Directory.</p>
            
            <h4>Description</h4>
            <p>Pour optimiser les tâches d'administration répétitives, j'ai développé une suite d'outils en PowerShell modulaire. J'ai créé des scripts capables d'importer des utilisateurs en masse depuis des fichiers CSV et JSON, générant automatiquement les attributs (SAMAccountName, Emails) et des mots de passe complexes via SecureString.</p>
            
            <p>Le projet incluait la gestion à distance via RSAT et WinRM (Enter-PSSession). J'ai structuré le code avec des fonctions personnalisées pour la création d'utilisateurs, l'assignation automatique aux Unités d'Organisation (UO) et l'activation des comptes. J'ai également manipulé les objets AD pour des modifications d'attributs en masse et la gestion des groupes, garantissant une standardisation des données de l'annuaire.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC33.01 | Créer des processus de traitement automatisé - Développement de scripts PowerShell pour l'import massif de données</li>
                <li>AC14.01 | Mettre à jour et interroger une base de données relationnelle - Manipulation des objets et attributs de la base Active Directory</li>
                <li>AC13.03 | Installer et configurer un système d'exploitation et des outils de développement - Configuration de l'environnement de scripting et RSAT</li>
                <li>AC23.02 | Utiliser des serveurs et des services réseaux virtualisés - Administration à distance via WinRM et sessions PowerShell</li>
            </ul>
        `,
        tags: ["PowerShell", "Scripting", "Automatisation", "Active Directory", "RSAT", "CSV/JSON"]
    },
    {
        id: "AD",
        title: "Projet Administration et Sécurisation Active Directory S5",
        context: "Gestion avancée d'un domaine Active Directory incluant l'automatisation des politiques de groupe et l'audit de sécurité de l'annuaire.",
        description: `
            <h3>Projet Windows Server - Administration et Durcissement AD</h3>
            <p><strong>Contexte</strong> Gestion avancée d'un domaine Active Directory d'entreprise incluant l'automatisation des politiques de groupe et l'audit de sécurité de l'annuaire.</p>
            
            <h4>Description</h4>
            <p>Dans un environnement Windows Server, j'ai structuré un annuaire Active Directory complet (Utilisateurs, Groupes, UO) reflétant l'organigramme d'une entreprise (Direction, IT, Production, etc.). J'ai implémenté une stratégie de GPO (Group Policy Objects) fine : déploiement ciblé de logiciels (Notepad++, 7zip), restriction d'accès aux paramètres systèmes, gestion des fonds d'écran par service et verrouillage de comptes après échecs d'authentification.</p>
            
            <p>J'ai également sécurisé l'architecture en gérant les ACLs sur les partages réseaux et en auditant l'AD avec l'outil PingCastle. Suite à l'analyse du rapport de vulnérabilité, j'ai appliqué des correctifs pour réduire la surface d'attaque et durcir la configuration du contrôleur de domaine.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC13.03 | Installer et configurer un système d'exploitation et des outils de développement - Installation du rôle AD DS et configuration du contrôleur de domaine</li>
                <li>AC33.03 | Appliquer une politique de sécurité au niveau de l'infrastructure - Déploiement de GPO de sécurité et restriction des droits utilisateurs</li>
                <li>AC23.03 | Sécuriser les services et données d'un système - Audit de vulnérabilité avec PingCastle et remédiation</li>
                <li>AC24.02 | Assurer la sécurité des données - Gestion des permissions NTFS et partage réseau par groupes de sécurité</li>
            </ul>
        `,
        tags: ["Windows Server", "Active Directory", "GPO", "PingCastle", "Audit", "Sécurité", "Administration"]
    },
    {
        id: "SIEM",
        title: "Projet Déploiement d'un SIEM S5",
        context: "Mise en place d'une infrastructure de cybersécurité centralisée pour la détection, l'analyse et la gestion des incidents de sécurité au sein d'un système d'information.",
        description: `
            <h3>Projet SIEM - Surveillance et Analyse de Sécurité</h3>
            <p><strong>Contexte</strong> Mise en place d'une infrastructure de cybersécurité centralisée pour la détection, l'analyse et la gestion des incidents de sécurité au sein d'un système d'information.</p>
            
            <h4>Description</h4>
            <p>J'ai déployé une solution SIEM (Security Information and Event Management) complète en interconnectant plusieurs outils open-source spécialisés. L'architecture repose sur la collecte de logs via Suricata (IDS) et leur centralisation dans OpenSearch pour l'indexation et le tri des données.</p>
            
            <p>J'ai intégré MISP pour la gestion de la "Threat Intelligence" afin d'enrichir l'analyse des menaces, et Zammad couplé à Elasticsearch pour la gestion des tickets d'incidents. L'ensemble permet une visualisation en temps réel des alertes et une réactivité accrue face aux menaces réseaux. J'ai configuré les flux de données entre ces différents composants pour assurer une chaîne de traitement cohérente, de la détection à la remédiation.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC23.02 | Utiliser des serveurs et des services réseaux virtualisés - Déploiement et interconnexion des briques logicielles du SIEM</li>
                <li>AC23.03 | Sécuriser les services et données d'un système - Configuration de sondes IDS et centralisation des logs de sécurité</li>
                <li>AC14.01 | Mettre à jour et interroger une base de données relationnelle - Gestion des index OpenSearch et Elasticsearch pour le tri des données</li>
                <li>AC33.02 | Configurer un serveur et des services réseaux de manière avancée - Orchestration des flux entre MISP, Suricata et le dashboard de visualisation</li>
            </ul>
        `,
        tags: ["SIEM", "Suricata", "OpenSearch", "MISP", "Elasticsearch", "Cybersécurité", "Threat Intel"]
    },
    {
        id: "docker-compose",
        title: "Projet Docker-compose - Stack Web S4",
        context: "Mise en œuvre d'un environnement de développement web conteneurisé pour faciliter le déploiement d'applications web avec base de données.",
        description: `
            <h3>Projet Docker-compose - Stack Web</h3>
            <p><strong>Contexte</strong> Mise en œuvre d'un environnement de développement web conteneurisé pour faciliter le déploiement d'applications web avec base de données.</p>
            
            <h4>Description</h4>
            <p>Pour ce projet individuel, j'ai conçu une solution d'infrastructure web complète utilisant Docker et Docker-compose. Mon implémentation comprend trois conteneurs interconnectés : un serveur Apache pour l'hébergement web, un service phpMyAdmin pour l'administration des données, et un serveur MySQL comme base de données.</p>
            
            <p>J'ai créé un fichier docker-compose.yml définissant les relations entre les conteneurs et configuré des réseaux virtuels pour leur communication. Pour le conteneur Apache, j'ai développé un Dockerfile personnalisé avec des configurations spécifiques. L'architecture utilise des volumes nommés pour la persistance des données MySQL.</p>
            
            <p>La documentation comprend un README.md détaillant l'architecture et les procédures de déploiement. L'ensemble de l'environnement démarre avec une simple commande docker-compose up, offrant un accès immédiat à phpMyAdmin et au serveur web pour héberger des applications PHP.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC13.03 | Installer et configurer un système d'exploitation et des outils de développement - Configuration de conteneurs Docker pour un environnement de développement</li>
                <li>AC23.01 | Concevoir et développer des applications communicantes - Mise en place d'un réseau virtuel entre conteneurs</li>
                <li>AC14.01 | Mettre à jour et interroger une base de données relationnelle - Configuration d'un conteneur MySQL et phpMyAdmin</li>
                <li>AC23.02 | Utiliser des serveurs et des services réseaux virtualisés - Orchestration de services web conteneurisés</li>
                <li>AC23.03 | Sécuriser les services et données d'un système - Isolation des services dans des conteneurs distincts</li>
            </ul>
        `,
        tags: ["DockerFile", "Docker-compose", "Apache", "MySQL", "phpMyAdmin", "Conteneurs"]
    },
    {
        id: "docker-swarm",
        title: "Projet Docker Swarm S4",
        context: "Implémentation d'un cluster haute disponibilité pour déployer des applications conteneurisées avec répartition de charge et tolérance aux pannes.",
        description: `
            <h3>Projet Docker Swarm </h3>
            <p><strong>Contexte</strong> Implémentation d'un cluster haute disponibilité pour déployer des applications conteneurisées avec répartition de charge et tolérance aux pannes.</p>
            
            <h4>Description</h4>
            <p>J'ai mis en place une infrastructure distribuée moderne basée sur Docker Swarm comprenant trois nœuds (un manager et deux workers) capables d'héberger diverses applications conteneurisées avec haute disponibilité.</p>
            
            <p>J'ai implémenté une stack Portainer avec Traefik pour la gestion du cluster et le routage des requêtes. Portainer me permet de superviser graphiquement l'état du cluster et de déployer facilement de nouveaux services, tandis que Traefik sert de reverse proxy et load-balancer. J'ai déployé un service WordPress avec une base de données MySQL persistante utilisant des volumes nommés.</p>
            
            <p>J'ai configuré des contraintes de placement pour que les services critiques comme Traefik soient toujours exécutés sur le nœud manager. J'ai testé la résilience du système en simulant la défaillance d'un nœud worker pour vérifier la continuité des services. La configuration réseau inclut des réseaux overlay dédiés pour isoler les communications entre services.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC23.02 | Utiliser des serveurs et des services réseaux virtualisés - Configuration d'un cluster Docker Swarm multi-nœuds</li>
                <li>AC24.02 | Assurer la sécurité des données - Mise en place de volumes persistants pour les bases de données</li>
                <li>AC33.01 | Créer des processus de traitement automatisé - Déploiement de services via Portainer avec réplication</li>
                <li>AC33.02 | Configurer un serveur et des services réseaux de manière avancée - Architecture de haute disponibilité avec Docker Swarm</li>
                <li>AC33.03 | Appliquer une politique de sécurité au niveau de l'infrastructure - Isolation des services via des réseaux complexe</li>
            </ul>
        `,
        tags: ["Docker Swarm", "Portainer", "Traefik", "WordPress", "Haute disponibilité", "Load balancer"]
    },
    {
        id: "power-apps",
        title: "Projet Power Apps Alternance",
        context: "Optimisation du processus d'envoi des identifiants de connexion aux nouveaux collaborateurs suite à la création de leurs comptes dans l'Active Directory.",
        description: `
            <h3>Projet Power Apps Alternance</h3>
            <p><strong>Contexte</strong> Optimisation du processus d'envoi des identifiants de connexion aux nouveaux collaborateurs suite à la création de leurs comptes dans l'Active Directory.</p>
            
            <h4>Description</h4>
            <p>Dans le cadre de mon alternance, j'ai développé une application métier avec Microsoft Power Apps pour moderniser et sécuriser le processus d'envoi des mots de passe initiaux aux nouveaux utilisateurs. Cette solution remplace une version antérieure codée en Python, en apportant des améliorations significatives tant sur le plan fonctionnel que sécuritaire. Face aux contraintes du protocole de sécurité de l'entreprise, qui exige la transmission des identifiants par email séparé après création des comptes Active Directory, j'ai conçu une solution plus robuste et conviviale.</p>
            <p>L'application génère automatiquement des mots de passe complexes conformes aux exigences de sécurité (combinaison de majuscules, minuscules, chiffres et caractères spéciaux), tout en intégrant un nouveau système de vérification qui valide l'existence des adresses email avant envoi, évitant ainsi les erreurs de transmission. L'interface utilisateur intuitive facilite la copie du mot de passe généré et l'envoi des informations en un seul clic. Un avantage majeur de cette nouvelle version sous Power Apps réside dans la gestion native des accès utilisateurs, permettant de contrôler précisément qui peut utiliser l'application via une simple attribution d'accès par email, fonctionnalité impossible avec la solution Python précédente. Cette refonte a considérablement réduit le temps consacré à cette tâche répétitive tout en renforçant la conformité avec les politiques de sécurité de l'entreprise.</p>
                        
            <h4>Compétences développées</h4>
            <ul>
                <li>AC21.03 | Adopter de bonnes pratiques de conception et de programmation - Implémentation d'une structure modulaire facilitant la maintenance et les évolutions futures</li>
                <li>AC31.02 | Faire évoluer une application existante - Modernisation d'une solution Python existante via une plateforme low-code avec ajout de fonctionnalités de vérification et de gestion des accès</li>
                <li>AC26.04 | Rendre compte de son activité professionnelle - Implémentation et documentation d'une solution professionnelle répondant aux exigences spécifiques de sécurité et d'accessibilité de l'entreprise</li>
                <li>AC15.01 | Appréhender les besoins du client et de l'utilisateur - Adaptation d'une solution aux besoins spécifiques du service et aux contraintes de sécurité de l'entreprise</li>
                <li>AC26.03 | Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique - Collaboration avec un collègue</li>
                <li>AC24.02 | Assurer la sécurité des données - Protection des informations confidentielles</li>
                <li>AC33.01 | Créer des processus de traitement automatisé - Optimisation et automatisation de l’envoie de mail</li>
            </ul>
        `,
        tags: ["Power Apps", "Sécurité", "Active Directory", "Automatisation", "Interface utilisateur", "Gestion des accès"]
    },
    {
        id: "chiffrement-s3",
        title: "Projet Chiffrement S3",
        context: "Solution sécurisée d'échange chiffré pour protéger des données sensibles lors de transmissions réseau prenant en compte l'échange de fichier.",
        description: `
            <h3>Projet Chiffrement S3</h3>
            <p><strong>Contexte</strong> Réalisation d'une solution sécurisée d'échange chiffré pour protéger des données sensibles lors de transmissions réseau prenant en compte l'échange de fichier.</p>
            
            <h4>Description</h4>
            <p>Mes camarades et moi avons développé une application client-serveur en langage C permettant la transmission sécurisée de données via le réseau. Le système implémente une architecture à double chiffrement combinant les algorithmes RSA et AES pour assurer une sécurité optimale. Le chiffrement RSA est utilisé pour l'échange de clés, tandis que l'AES permet de chiffrer efficacement le contenu des fichiers et les échanges de données. La communication entre le client et le serveur s'effectue sur le protocole TCP avec une gestion complète des sockets. L'application prend en charge la sélection et le transfert des fichiers, ainsi que leur chiffrement et déchiffrement.</p>
            
            <p><strong>SAÉ 3.Deploi.01</strong> : Création et déploiement de services applicatifs</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC11.01 | Implémenter des conceptions simples - Développement du client-serveur TCP en C</li>
                <li>AC11.03 | Faire des essais et évaluer leurs résultats en regard des spécifications - Test de l'algorithme de chiffrement</li>
                <li>AC23.01 | Concevoir et développer des applications communicantes - Création d'un système d'échange de données sur TCP</li>
                <li>AC23.03 | Sécuriser les services et données d'un système - Mise en œuvre du double chiffrement RSA/AES via OpenSSL</li>
                <li>AC22.03 | Comprendre les enjeux et moyens de sécurisation des données et du code - Application des principes cryptographiques</li>
                <li>AC26.03 | Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique - travaille d’équipe</li>
            </ul>
        `,
        tags: ["C", "RSA", "AES", "TCP", "Sécurité", "OpenSSL"]
    },
    {
        id: "java-s2",
        title: "Projet JAVA S2",
        context: "Application de gestion et de simulation de trafic aérien pour détecter et résoudre les conflits potentiels entre les vols.",
        description: `
            <h3>Projet JAVA S2</h3>
            <p><strong>Contexte</strong> Développement d'une application de gestion et de simulation de trafic aérien pour détecter et résoudre les conflits potentiels entre les vols.</p>
            
            <h4>Description</h4>
            <p>Ce projet a consisté en la réalisation d'une application Java complète pour analyser et visualiser les trajectoires d'un ensemble de vols. L'objectif principal était d'identifier les potentiels conflits aériens (deux avions trop proches l'un de l'autre) représentés par un graphe et de proposer des solutions pour les éviter (changement d'altitude). L'application permet l'importation de données de vols à partir de fichiers CSV, la visualisation graphique des trajectoires, et l'analyse automatique des risques de collision. J'ai implémenté des algorithmes de détection de conflits basés sur la théorie des graphes, où chaque conflit potentiel est représenté par une arête entre deux sommets (les vols). L'interface utilisateur intuitive permet une navigation facile entre les différentes fonctionnalités.</p>
            
            <p>Ce projet correspond aux <strong>SAÉ 2.01</strong> : Développement d'une application, <strong>Saé 2.02</strong> Exploration Algorithmique D'Un Problème et inclut des aspects de la <strong>SAÉ 2.05</strong> : Gestion d'un projet</p>
            <h4>Compétences développées</h4>
            <ul>
                <li>AC11.02 | Élaborer des conceptions simples - Conception orientée objet en Java</li>
                <li>AC11.04 | Développer des interfaces utilisateurs - Création de l'interface graphique JavaSwing</li>
                <li>AC12.01 | Analyser un problème avec méthode - Modélisation des conflits de vols</li>
                <li>AC12.02 | Comparer des algorithmes pour des problèmes classiques - Implémentation d'algorithmes sur les graphes</li>
                <li>AC15.02 | Mettre en place les outils de gestion de projet - Utilisation des méthodologies Gantt, MoSCoW et Kanban</li>
                <li>AC21.02 | Appliquer des principes d'accessibilité et d'ergonomie - Conception d'une interface intuitive</li>
                <li>AC26.03 | Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique - travaille d’équipe</li>
            </ul>
        `,
        tags: ["Java", "Swing", "CSV", "Graphes", "Visualisation"]
    },
    {
        id: "power-bi",
        title: "Projet Power BI S2",
        context: "Analyse approfondie de données pour fournir des informations stratégiques à la direction et optimiser les prises de décision.",
        description: `
            <h3>Projet Power BI S2</h3>
            <p><strong>Contexte</strong> Analyse approfondie de données pour fournir des informations stratégiques à la direction et optimiser les prises de décision.</p>
            
            <h4>Description</h4>
            <p>Ce projet académique visait à créer un tableau de bord décisionnel complet en exploitant des données extraites d'un site web. Après avoir récupéré ces données brutes, j'ai procédé à leur nettoyage et transformation à l'aide de requêtes SQL et PL/SQL sur une base Oracle. Cette phase de préparation a été essentielle pour garantir la qualité et la pertinence des analyses ultérieures. Une fois les données structurées, j'ai conçu et développé avec Microsoft Power BI plusieurs types de visualisations (graphiques, tableaux croisés dynamiques, cartes, indicateurs de performance) organisées en tableaux de bord cohérents. J'ai porté une attention particulière à l'agencement des différents diagrammes pour faciliter la lecture et l'interprétation des informations stratégiques. Le résultat final a permis de présenter à la direction (fictive) des indicateurs clés de performance et des tendances actionnables, démontrant ainsi la valeur ajoutée de l'analyse de données pour la prise de décision.</p>
            
            <p><strong>SAÉ</strong> SAÉ 2.04 : Exploitation d'une base de données avec des aspects de visualisation et d'analyse de données.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC14.01 | Mettre à jour et interroger une base de données relationnelle - Utilisation de SQL/PL-SQL</li>
                <li>AC14.02 | Visualiser des données - Création de tableaux de bord avec Power BI</li>
                <li>AC24.03 | Organiser la restitution de données à travers la programmation et la visualisation - Conception de visualisations pertinentes</li>
                <li>AC24.01 | Optimiser les modèles de données de l'entreprise - Structuration des données pour l'analyse</li>
                <li>AC24.04 | Manipuler des données hétérogènes - Exploitation de données provenant de sources diverses</li>
                <li>AC26.03 | Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique - travaille d’équipe</li>
            </ul>
        `,
        tags: ["Power BI", "SQL", "PL/SQL", "Oracle", "Visualisation", "Analyse"]
    },
    {
        id: "projet-reseau",
        title: "Projet Réseau S2",
        context: "Configuration d'une infrastructure réseau physique pour permettre la communication entre différents postes de travail et l'accès à des services web au sein d'une salle.",
        description: `
            <h3>Projet Réseau S2</h3>
            <p><strong>Contexte</strong> Configuration d'une infrastructure réseau physique pour permettre la communication entre différents postes de travail et l'accès à des services web au sein d'une salle.</p>
            
            <h4>Description</h4>
            <p>Ce projet pratique visait à déployer une infrastructure réseau fonctionnelle en utilisant du matériel physique Cisco. L'objectif principal était d'établir une communication efficace entre tous les postes de la salle et de permettre l'accès aux serveurs web de chaque équipe. J'ai travaillé sur la configuration de switches et de routeurs Cisco réels, en appliquant les bonnes pratiques de l'industrie.
            La méthodologie adoptée nous a d'abord amenés à implémenter un routage statique complet pour comprendre en profondeur les mécanismes de transmission des paquets et les concepts fondamentaux de routage. Une fois cette base maîtrisée, nous avons fait évoluer notre configuration vers un routage dynamique sur les routeurs Cisco, ce qui a permis d'optimiser la transmission des paquets et d'assurer la redondance des chemins de communication. Cette approche progressive a renforcé notre compréhension des avantages du routage dynamique par rapport au routage statique.
            En parallèle, j'ai configuré un serveur web Apache2 sur mon poste et établi les règles de routage nécessaires pour le rendre accessible à tous les autres participants du réseau, tout en accédant à leurs propres serveurs. Ce projet complet m'a permis de maîtriser non seulement les aspects d'interconnexion réseau mais également le déploiement et la publication de services applicatifs à travers l'infrastructure.
            </p>
            
            <p>Ce projet correspond à la <strong>SAÉ 2.03 </strong>: Installation de services réseau</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC13.01 | Identifier les différents composants d'un système numérique - Configuration switches et routeurs Cisco </li>
                <li>AC13.04 | Configurer un poste de travail dans un réseau d'entreprise - Communication entre postes du réseau</li>
                <li>AC23.01 | Concevoir et développer des applications communicantes - Configuration d'un serveur web Apache2 accessible via l'infrastructure réseau</li>
                <li>AC26.03 | Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique - travaille d’équipe</li>
            </ul>
        `,
        tags: ["Cisco", "Réseau", "Routage statique", "Routage dynamique", "Apache2", "Configuration réseau"]
    },
    {
        id: "projet-intro-systeme",
        title: "Projet Intro Système S1",
        context: "Élaboration d'une documentation technique et utilisateur pour répondre aux besoins informatiques spécifiques d'un photographe professionnel.",
        description: `
            <h3>Projet Intro Système S1</h3>
            <p><strong>Contexte</strong> Élaboration d'une documentation technique et utilisateur pour répondre aux besoins informatiques spécifiques d'un photographe professionnel.</p>
            
            <h4>Description</h4>
            <p>J'ai réalisé un projet d'analyse et de documentation pour accompagner un photographe professionnel dans la mise en place de son environnement informatique.</p>
            
            <p>J'ai rédigé une notice explicative pour le client, détaillant les spécifications matérielles recommandées pour son activité de retouche photo (carte graphique performante, 16 GB de RAM minimum, processeur adapté). Le document présentait ces recommandations dans un langage accessible avec justifications techniques.</p>
            
            <p>En parallèle, j'ai développé une documentation technique pour les informaticiens comprenant les procédures d'installation d'une VM Ubuntu, la configuration d'un environnement de développement et des logiciels de photographie. Cette partie incluait également la mise en place d'une structure d'utilisateurs et de groupes avec gestion des permissions d'accès pour sécuriser les données tout en facilitant la collaboration.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC13.01 | Identifier les différents composants d'un système numérique - Analyse et sélection de composants adaptés à un usage professionnel spécifique</li>
                <li>AC13.02 | Utiliser les fonctionnalités de base d'un système multitâches / multiutilisateurs - Configuration des utilisateurs et groupes avec permissions</li>
                <li>AC13.03 | Installer et configurer un système d'exploitation et des outils de développement - Configuration d'une VM Ubuntu avec environnement de développement</li>
                <li>AC13.04 | Configurer un poste de travail dans un réseau d'entreprise - Intégration du poste de travail dans l'environnement d'un photographe</li>
                <li>AC15.01 | Appréhender les besoins du client et de l'utilisateur - Traduction de besoins métier en spécifications techniques</li>
                <li>AC16.04 | Acquérir les compétences interpersonnelles pour travailler en équipe - Communication adaptée aux interlocuteurs techniques et non-techniques</li>
            </ul>
        `,
        tags: ["Ubuntu", "VM", "Documentation", "Système", "Permissions"]
    }
];

// Expériences
const experiences = [
    {
        id: "gestion-demandes-utilisateurs",
        title: "Gestion des Demandes Utilisateurs (GDD)",
        context: "En tant qu'alternant au sein du Groupe La Poste, ma mission principale consiste à gérer les demandes d'accès et d'accréditations des utilisateurs dans différents systèmes d'information de l'entreprise.",
        description: `
            <h3>Gestion des Demandes Utilisateurs (GDD)</h3>
            <p><strong>Contexte</strong> En tant qu'alternant au sein du Groupe La Poste, ma mission principale consiste à gérer les demandes d'accès et d'accréditations des utilisateurs dans différents systèmes d'information de l'entreprise.</p>
            
            <h4>Description</h4>
            <p>Je suis responsable du traitement des demandes utilisateurs concernant l'Active Directory (Domaine DCT pour banque et Courrier), les applications métiers du groupe et des licences (Platon) et les systèmes d'accréditations bancaires (T41 et RACF). Mon rôle est d'assurer la gestion efficace des identités et des accès pour garantir à la fois la sécurité des systèmes d'information et la continuité opérationnelle des services.</p>
            
            <h4>Mes activités principales incluent</h4>
                <p>- Gestion des comptes dans l'Active Directory (création, prolongation, mise à jour, suppression)</p>
                <p>- Création et gestion des comptes administratifs pour les domaines DCT et Courrier de l'active directory</p>
                <p>- Configuration des accréditations bancaires via T41/RACF</p>
                <p>- Attribution des accès aux répertoires réseau et serveurs selon les besoins métiers</p>
                <p>- Mise en place des accès VPN pour le travail à distance</p>
                <p>- Création d'abonnements spécifiques pour les comptes des mairies partenaires</p>

            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC13.04 | Configurer un poste de travail dans un réseau d'entreprise - Intégration des utilisateurs dans l'environnement Active Directory</li>
                <li>AC23.02 | Utiliser des serveurs et des services réseaux virtualisés - Connexions aux serveurs pour récupérer les groupes de sécurité</li>
                <li>AC23.03 | Sécuriser les services et données d'un système - Application des politiques d'accès et de sécurité</li>
                <li>AC15.03 | Identifier les acteurs et les différentes phases d'un cycle de développement - Compréhension du processus de validation des demandes</li>
                <li>AC26.01 | Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation - Compréhension de la structure et de l’écosystème complex de l’entreprise</li>
            </ul>
        `,
        tags: ["Active Directory", "Gestion des accès", "Sécurité", "T41/RACF", "VPN", "Administration système"]
    },
    {
        id: "gestion-incidents",
        title: "Gestion Des Incidents (GDI)",
        context: "Dans le cadre de mon alternance au Groupe La Poste, j'ai été formé à la Gestion Des Incidents (GDI) en tant que support de niveau 2, intervenant sur les incidents escaladées par le support de niveau 1.",
        description: `
            <h3>Gestion Des Incidents (GDI)</h3>
            <p><strong>Contexte</strong> Dans le cadre de mon alternance au Groupe La Poste, j'ai été formé à la Gestion Des Incidents (GDI) en tant que support de niveau 2, intervenant sur les incidents escaladées par le support de niveau 1.</p>
            
            <h4>Description</h4>
            <p>Bien qu'étant en apprentissage, j'ai pu traiter des incidents réels sous la supervision de mon tuteur. Cette expérience m'a permis de développer des compétences en résolution de problèmes et en communication client.</p>
            
            <p>Mon rôle consistait à prendre en charge les tickets escaladés, contacter les utilisateurs concernés, diagnostiquer les problèmes et apporter des solutions efficaces. Je me suis principalement concentré sur :</p>
            
            
            <p>- La résolution de problèmes d'authentification et de réenrôlement GAIA (problématiques liées à Google Authenticator)</p>
            <p>- Le traitement d'incidents Microsoft Outlook (problèmes d'affichage de PDF, dysfonctionnements du calendrier)</p>
          
            
            <p>Cette formation pratique m'a permis de comprendre le processus complet de gestion des incidents, en m'appuyant sur la documentation existante tout en développant ma capacité à communiquer efficacement avec des utilisateurs non-techniques.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC15.01 | Appréhender les besoins du client et de l'utilisateur - Analyse des problèmes signalés et traduction en termes techniques</li>
                <li>AC16.01 | S'intégrer dans un environnement propice au développement et au travail collaboratif - Participation au processus de support multi-niveaux</li>
                <li>AC16.04 | Acquérir les compétences interpersonnelles pour travailler en équipe - Communication adaptée avec les utilisateurs et le support niveau 1</li>
                <li>AC36.03 | Guider la conduite du changement informatique au sein d'une organisation - Accompagnement des utilisateurs dans l'adoption des outils numériques</li>
            </ul>
        `,
        tags: ["Support niveau 2", "GAIA", "Outlook", "Communication client", "Résolution d'incidents"]
    },
    {
        id: "securite-videosurveillance",
        title: "Sécurité - Vidéosurveillance",
        context: "Dans le cadre de mon alternance au Groupe La Poste, je suis chargé du traitement des demandes d'extraction de vidéosurveillance provenant des sites du groupe à travers la France métropolitaine et les territoires d'outre-mer.",
        description: `
            <h3>Sécurité - Vidéosurveillance</h3>
            <p><strong>Contexte</strong> Dans le cadre de mon alternance au Groupe La Poste, je suis chargé du traitement des demandes d'extraction de vidéosurveillance provenant des sites du groupe à travers la France métropolitaine et les territoires d'outre-mer.</p>
            
            <h4>Description</h4>
            <p>Je traite les demandes d'extraction de vidéosurveillance émanant des forces de l'ordre ou des directeurs de sécurité. Cette mission sensible impose une rigueur particulière dans le respect des protocoles de sécurité et de confidentialité.</p>
            
            <p>Le processus comprend l'extraction des vidéos depuis les systèmes de surveillance distants et leur partage sécurisé via la plateforme PostFile. Chaque demande est documentée méticuleusement dans un registre partagé, en précisant la nature de la demande, la taille des fichiers extraits et le temps consacré à l'opération.</p>
            
            <p>Cette activité m'a permis de développer une certaine expertise dans la manipulation sécurisée de données sensibles et la mise en œuvre de protocoles de sécurité stricts, tout en maintenant une traçabilité complète des opérations effectuées.</p>
            
            <h4>Compétences développées</h4>
            <ul>
                <li>AC23.03 | Sécuriser les services et données d'un système - Application des protocoles de transmission sécurisée de données sensibles</li>
                <li>AC24.02 | Assurer la sécurité des données - Manipulation sécurisée d'enregistrements vidéo confidentiels</li>
                <li>AC26.04 | Rendre compte de son activité professionnelle - Documentation précise des interventions dans le registre partagé</li>
            </ul>
        `,
        tags: ["Vidéosurveillance", "Sécurité", "PostFile", "Confidentialité", "Forces de l'ordre"]
    }
];


// Fonction pour afficher les projets
function displayProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.onclick = () => openModal(project);
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p class="context">${project.context}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Fonction pour ouvrir la modal
function openModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = project.description;
    modal.style.display = 'block';

    document.querySelector('.close').onclick = closeModal;
}

// Fonction pour fermer la modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

// Smooth scrolling pour la navigation
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Effet de scroll pour la navbar
function navbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'white';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    displayProjects();
    displayCompetences();
    displayExperiences();
    smoothScroll();
    navbarScrollEffect();
    
    // Event listeners pour la modal
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = closeModal;
    
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
});

// Fonction utilitaire pour ajouter un nouveau projet (pour vous faciliter la tâche)
function addNewProject(title, context, description, tags) {
    const newProject = {
        id: title.toLowerCase().replace(/\s+/g, '-'),
        title: title,
        context: context,
        description: description,
        tags: tags
    };
    
    projects.push(newProject);
    
    // Recharger l'affichage
    document.getElementById('projects-container').innerHTML = '';
    displayProjects();
}

// Données des compétences 
const competences = {
    "Réaliser un développement d'application": {
        items: [
            { description: "Implémenter des conceptions simples", projets: ["chiffrement-s3"] },
            { description: "Élaborer des conceptions simples", projets: ["java-s2"] },
            { description: "Faire des essais et évaluer leurs résultats en regard des spécifications", projets: ["chiffrement-s3"] },
            { description: "Développer des interfaces utilisateurs", projets: ["java-s2"] },
            { description: "Appliquer des principes d'accessibilité et d'ergonomie", projets: ["java-s2"] },
            { description: "Adopter de bonnes pratiques de conception et de programmation", projets: ["power-apps"] },
            { description: "Faire évoluer une application existante", projets: ["power-apps"] }
        ]
    },
    "Optimiser des applications informatiques": {
        items: [
            { description: "Analyser un problème avec méthode", projets: ["java-s2"] },
            { description: "Comparer des algorithmes pour des problèmes classiques", projets: ["java-s2"] },
            { description: "Comprendre les enjeux et moyens de sécurisation des données et du code", projets: ["chiffrement-s3"] }
        ]
    },
    "Administrer des systèmes informatiques communicants complexes": {
        items: [
            { description: "Identifier les différents composants d'un système numérique", projets: ["projet-reseau", "projet-intro-systeme"] },
            { description: "Utiliser les fonctionnalités de base d'un système multitâches / multiutilisateurs", projets: ["projet-intro-systeme"] },
            
            // Ajout de Powershell-AD et AD (AC13.03)
            { description: "Installer et configurer un système d'exploitation et des outils de développement", projets: ["projet-intro-systeme", "docker-compose", "Powershell-AD", "AD"] },
            
            { description: "Configurer un poste de travail dans un réseau d'entreprise", projets: ["projet-reseau", "projet-intro-systeme"], experiences: ["gestion-demandes-utilisateurs"] },
            
            // Ajout de Supervision (AC23.01)
            { description: "Concevoir et développer des applications communicantes", projets: ["chiffrement-s3", "projet-reseau", "docker-compose", "Supervision"] },
            
            // Ajout de Sauvegarde, Supervision, Powershell-AD, SIEM (AC23.02)
            { description: "Utiliser des serveurs et des services réseaux virtualisés", projets: ["docker-compose", "docker-swarm", "Sauvegarde", "Supervision", "Powershell-AD", "SIEM"], experiences: ["gestion-demandes-utilisateurs"]},
            
            // Ajout de AD et SIEM (AC23.03)
            { description: "Sécuriser les services et données d'un système", projets: ["chiffrement-s3", "docker-compose", "AD", "SIEM"], experiences:["gestion-demandes-utilisateurs", "securite-videosurveillance"] },
            
            // Ajout de Sauvegarde, Supervision, Powershell-AD (AC33.01)
            { description: "Créer des processus de traitement automatisé", projets: ["power-apps", "docker-swarm", "Sauvegarde", "Supervision", "Powershell-AD"] },
            
            // Ajout de Sauvegarde, Supervision, SIEM (AC33.02)
            { description: "Configurer un serveur et des services réseaux de manière avancée", projets: ["docker-swarm", "Sauvegarde", "Supervision", "SIEM"] },
            
            // Ajout de AD (AC33.03)
            { description: "Appliquer une politique de sécurité au niveau de l'infrastructure", projets: ["docker-swarm", "AD"]}
        ]
    },
    "Gérer des données de l'information": {
        items: [
            // Ajout de Powershell-AD et SIEM (AC14.01)
            { description: "Mettre à jour et interroger une base de données relationnelle", projets: ["power-bi", "docker-compose", "Powershell-AD", "SIEM"] },
            
            { description: "Visualiser des données", projets: ["power-bi"] },
            { description: "Optimiser les modèles de données de l'entreprise", projets: ["power-bi"] },
            
            // Ajout de Sauvegarde et AD (AC24.02)
            { description: "Assurer la sécurité des données", projets: ["power-apps", "docker-swarm", "Sauvegarde", "AD"], experiences: ["securite-videosurveillance"] },
            
            { description: "Organiser la restitution de données à travers la programmation et la visualisation", projets: ["power-bi"] },
            { description: "Manipuler des données hétérogènes", projets: ["power-bi"] }
        ]
    },
    "Conduire un projet": {
        items: [
            { description: "Appréhender les besoins du client et de l'utilisateur", projets: ["power-apps", "projet-intro-systeme"], experiences: ["gestion-incidents"] }, 
            { description: "Mettre en place les outils de gestion de projet", projets: ["java-s2"] },
            { description: "Identifier les acteurs et les différentes phases d'un cycle de développement", experiences: ["gestion-demandes-utilisateurs"] }
        ]
    },
    "Travailler dans une équipe informatique": {
        items: [
            { description: "S'intégrer dans un environnement propice au développement et au travail collaboratif", experiences: ["gestion-incidents"] }, 
            { description: "Acquérir les compétences interpersonnelles pour travailler en équipe", projets: ["projet-intro-systeme"], experiences: ["gestion-incidents"] }, 
            { description: "Comprendre la diversité, la structure et la dimension de l'informatique dans une organisation", experiences: ["gestion-demandes-utilisateurs"] },
            { description: "Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique", projets: ["chiffrement-s3", "java-s2", "power-apps", "power-bi", "projet-reseau"] },
            { description: "Rendre compte de son activité professionnelle", projets: ["power-apps"], experiences: ["securite-videosurveillance"] },
            { description: "Guider la conduite du changement informatique au sein d'une organisation", experiences: ["gestion-incidents"] } 
        ]
    }
};
// Fonction pour afficher les compétences (Version Catégories conservées)
function displayCompetences() {
    const container = document.getElementById('competences-container');
    container.innerHTML = ''; 
    
    // On parcourt chaque catégorie principale
    Object.entries(competences).forEach(([categoryTitle, categoryContent]) => {
        
        // 1. Création du bloc principal de la catégorie
        const categoryBlock = document.createElement('div');
        categoryBlock.className = 'competence-category-block';
        
        // 2. Le Titre de la catégorie (La "Grande Partie")
        const h3 = document.createElement('h3');
        h3.className = 'category-title';
        h3.textContent = categoryTitle;
        categoryBlock.appendChild(h3);
        
        // 3. La liste des compétences de cette catégorie
        const ul = document.createElement('ul');
        ul.className = 'category-list';
        
        categoryContent.items.forEach(item => {
            // Création des liens (projets/expériences)
            let allLinks = [];
            
            if (item.projets && item.projets.length > 0) {
                const projectLinks = item.projets.map(projectId => {
                    const project = projects.find(p => p.id === projectId);
                    return project ? `<a href="#" class="projet-link" onclick="scrollToProjectAndOpen('${projectId}')">${project.title}</a>` : '';
                }).filter(link => link !== '');
                allLinks = allLinks.concat(projectLinks);
            }
            
            if (item.experiences && item.experiences.length > 0) {
                const experienceLinks = item.experiences.map(experienceId => {
                    const experience = experiences.find(e => e.id === experienceId);
                    return experience ? `<a href="#" class="projet-link" onclick="scrollToExperienceAndOpen('${experienceId}')">${experience.title}</a>` : '';
                }).filter(link => link !== '');
                allLinks = allLinks.concat(experienceLinks);
            }
            
            const linksHTML = allLinks.length > 0 ? 
                `<div class="projet-links">${allLinks.join('')}</div>` : 
                `<div class="projet-links"><span class="projet-placeholder">-- Projets à venir</span></div>`;
            
            // L'item compétence
            const li = document.createElement('li');
            li.className = 'competence-item';
            li.innerHTML = `
                <span class="competence-description">${item.description}</span>
                ${linksHTML}
            `;
            ul.appendChild(li);
        });
        
        categoryBlock.appendChild(ul);
        container.appendChild(categoryBlock);
    });
}


// Fonction pour aller au projet et ouvrir la modal (correction du bug)
function scrollToProjectAndOpen(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        setTimeout(() => {
            openModal(project);
        }, 800);
    }
}

// Fonction pour ouvrir la modal d'expérience
function openExperienceModal(experience) {
    const modal = document.getElementById('experience-modal');
    const modalBody = document.getElementById('experience-modal-body');
    
    modalBody.innerHTML = experience.description;
    modal.style.display = 'block';

    // Fermer la modal expérience
    document.querySelector('#experience-modal .close').onclick = () => {
        modal.style.display = 'none';
    };
}

// Fonction pour afficher les expériences
function displayExperiences() {
    const container = document.getElementById('experiences-container');
    
    experiences.forEach(experience => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';
        experienceCard.onclick = () => openExperienceModal(experience);
        
        experienceCard.innerHTML = `
            <h3>${experience.title}</h3>
            <p class="context">${experience.context}</p>
            <div class="project-tags">
                ${experience.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        container.appendChild(experienceCard);
    });
}

function scrollToExperienceAndOpen(experienceId) {
    console.log("Recherche expérience avec ID:", experienceId);
    console.log("Toutes les expériences:", experiences);
    
    const experience = experiences.find(e => e.id === experienceId);
    console.log("Expérience trouvée:", experience);
    
    if (experience) {
        const experiencesSection = document.getElementById('experiences');
        console.log("Section experiences trouvée:", experiencesSection);
        
        if (experiencesSection) {
            experiencesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            setTimeout(() => {
                openExperienceModal(experience);
            }, 800);
        }
    } else {
        console.log("ERREUR: Expérience non trouvée!");
    }
}





