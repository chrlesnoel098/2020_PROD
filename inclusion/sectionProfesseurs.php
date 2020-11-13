<!-- Début de la section Professeur -->
<?php
            // Lire le fichier JSON dans une chaîne de caractères
            $profsJSONString = file_get_contents("data/profs.json");

            // Décoder la chaîne JSON dans une structure de données PHP
            $profsJSON = json_decode($profsJSONString, true);

            // Parcourir le tableau associatif coursJSON
            foreach ($profsJSON as $Professeurs => $unProf) :
            ?>
<section id="Professeur">
            <h1 id="SectionProfesseur">Professeurs</h1>
        <div class="prof-vignette">
            <img src="images/profs/camille.jpg" alt="Camille">
            <h3 class="nom-prof">Camille Semaan</h3>

            <p style="overflow-y: auto;">Ma vocation : communiquer connaissances et savoir-faire.<br>Ma devise : 'Comprendre et ne pas juger' (Georges Simenon)<br><br> On a tous notre temps</p>
            <h4>email: csemaan@cmaisonneuve.qc.ca</h4>
        </div> <!--fin prof-vignette -->
        
        
        <div id="prof-tableau">   
        <div class="prof">
            <div class="prof-tableau">
                <ul class="prof-liste">

                    <!-- Chaque photo et nom dans un li -->
                    <?php
                        // Traverser le tableau numérique "plats"
                        foreach ($unProf as $profDescription) :
                    ?>
                    <li>
                        
                        <!--img src="<?= $profDescription["photo"];?>">-->
                        <a><?= $profDescription["nom"]; ?></a>
                            
                    </li>

                    <?php
                        endforeach;
                    ?>
                    </div><!--fin tableau-professeur-->
                </ul>
            </div>
        </div>

        <?php
            endforeach;
        ?>
            
</section>
        <!-- Fin de la section Professeur -->