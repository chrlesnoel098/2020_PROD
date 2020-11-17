<!-- Début de la section Professeur -->
<?php
            // Lire le fichier JSON dans une chaîne de caractères
            $profsJSONString = file_get_contents("data/profs.json");
            

            // Décoder la chaîne JSON dans une structure de données PHP
            $profsJSON = json_decode($profsJSONString, true);


            ?>
            
<section id="Professeur">
        <h1 id="SectionProfesseur">Professeurs</h1>
            <div id="desktop-conteneur">    
            <?php  
                // Parcourir le tableau associatif profJSON
                foreach ($profsJSON as $Professeurs => $unProf) :
              
                foreach ($unProf as $profDescription) :?> 
                <div class="afficher-prof choix-prof" id="prof<?= $profDescription["valeur"];?>">
                    <img src="images/profs/<?= $profDescription["photo"];?>" alt="<?= $profDescription["nom"];?>">
                    <div id="prof-presentation">
                    <h2><?= $profDescription["nom"];?></h2> 
                    <p style="overflow: auto;"><?= $profDescription["description"];?></p> 
                    <h3><?= $profDescription["email"];?></h3> 
                    </div><!--fin presentation-->
                </div>
            <?php
            endforeach;
            ?>
               
            <?php
            endforeach;
            ?>
                
                <ul class="prof-liste">
                <?php  
                // Parcourir le tableau associatif coursJSON
                foreach ($profsJSON as $Professeurs => $unProf) :
              
                foreach ($unProf as $profDescription) :?> 
                    <!-- nom dans un li avec une value ajoutee -->
                  
                    <li>
                       
                        <a class="choix-prof" data-prof="<?= $profDescription["valeur"];?>"><?= $profDescription["nom"];?></a>
                    
                    </li>

                    <?php
                        endforeach;
                    ?>
                </ul>
            </div><!-- Fin de desktop-conteneur -->
        

        <?php
            endforeach;
        ?>
</section>
        <!-- Fin de la section Professeur -->