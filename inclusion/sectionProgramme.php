<!-- Début de la section programme -->
<section id="Programme">
    <h1 id="SectionProgramme">Programme</h1>
    <div id="DescriptionGenerale">
        <p>Maisonneuve est le seul cégep sur l’Île de Montréal à offrir ce programme qui vous offre une immersion dans
            le monde du jeu 2D/3D, du Web, des technologies mobiles et des médias numériques, tout en apprenant
            différents langages de programmation. <br>

            Dans ce programme, vous apprendrez à identifier, analyser, imaginer, réaliser et coordonner un projet
            multimédia et les différentes étapes de production qui y sont liées : </p>

        <ul class="listeEtapeProduction">
            <li><span>La médiatisation :</span> Créer ou modifier des éléments graphiques et multimédias.</li>
            <li><span>La conception :</span> Concevoir le design et l’interactivité d’un projet multimédia.</li>
            <li><span>L’intégration :</span> Intégrer de façon cohérente et artistique les composantes d’un projet
                interactif.</li>
            <li><span>L’environnement professionnel :</span> Développer une vision globale du multimédia et connaître
                l’environnement de travail tant du point de vue technologique qu’interpersonnel.</li>
        </ul>

        <p>En laboratoire, vous connaîtrez :</p>

        <ul class="listeEtapeProduction">
            <li><span>Les logiciels :</span> Photoshop, Illustrator, Maya (3D), Unity, AfterEffects, etc.</li>
            <li><span>Les langages :</span> HTML, CSS, JavaScript, SQL, PHP, C#, etc.</li>
        </ul>

    </div>
    <!-- <div class="listeBoutons">
        <button>Voir les cours de création</button>
        <button>Voir les cours de programmation</button>
        <button>Voir tous cours</button>
    </div> -->
    <div id="ToutesSessions">
        <?php
            // Lire le fichier JSON dans une chaîne de caractères
            $listeCoursJSONString = file_get_contents("data/listeCours.json");

            // Décoder la chaîne JSON dans une structure de données PHP
            $coursJSON = json_decode($listeCoursJSONString, true);

            // Parcourir le tableau associatif coursJSON
            foreach ($coursJSON as $session => $uneSession) :
            ?>
        <div class="session">
            <button class="boutonSession">
                <h2><?= $session; ?></h2>
            </button>
            <div class="fenetreCours cachee">
                <ul class="listeCours">

                    <!-- Chaque cours d'une session dans un LI -->
                    <?php
                        // Traverser le tableau numérique "uneSession"
                        foreach ($uneSession as $Cours => $unCours) :
                    ?>
                    <li>
                        <section class="descriptionCours">
                            <h3><?= $unCours["nom"]; ?></h3>
                            <ul class="cachee">
                                <li>Sigle : <?= $unCours["sigle"]; ?></li>
                                <li>Préalable : <?= $unCours["prealable"]; ?></li>
                                <li>Pondération : <?= $unCours["ponderation"]; ?></li>
                                <li>Nombre d'heures : <?= $unCours["heure"]; ?></li>
                                <li>Description : <?= $unCours["description"]; ?></li>
                            </ul>
                        </section>
                    </li>

                    <?php
                        endforeach;
                    ?>

                </ul>
            </div>
        </div>

        <?php
            endforeach;
        ?>
    </div>
</section>

        <!-- fin de la section programme -->