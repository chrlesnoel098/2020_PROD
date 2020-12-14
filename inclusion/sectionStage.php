<!-- Début de la section Stage -->
<section class="stage" id="Stage">
    <h1 id="SectionStage">Stages</h1>

    <!-------------------------------------------------------- Carrousel container----->
    <div class="stageCarrousel-container">
        <div class="mySlides fade">
            <img src="images/Stagiers/stages1.jpg"/>
            <div class="text"></div>
        </div>

        <div class="mySlides fade">
            <img src="images/Stagiers/stages2.jpg"/>
            <div class="text"></div>
        </div>

        <div class="mySlides fade">
            <img src="images/Stagiers/stages3.jpg"/>
            <div class="text"></div>
        </div>

        <!-- buttons avant et après -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>

    <!-- les petits circles -->
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>



<!-------------------------------------------------------Expériences de stage -->
<div class="petitmot">
            <p>stage en milieu de travail</p>
            <hr>
            <p>Expériences</p>
        </div>

<!------------------------------------------------------ Json -------- -->
<div class="stagierContent">
<?php
    // Lire le fichier JSON dans une chaîne de caractères
    $stageExpeJSONString = file_get_contents("data/stageExperiences.json");

    // Décoder la chaîne JSON dans une structure de données PHP
    $experienceJSON = json_decode($stageExpeJSONString, true);

    // Parcourir le tableau associatif imagesJSON
    foreach ($experienceJSON as $experience => $uneExperience) :
        foreach ($uneExperience as $unePersonne) :
?>
    
                <div class="stagier-info">
                    <div class="stagier">
                        <img src="images/Stagiers/<?= $unePersonne["image"]; ?>" class="stagierPhoto" alt="photo du stagier">
                        <p><?= $unePersonne["nom"]; ?></p>
                        <p><?= $unePersonne["typeStage"]; ?></p>
                    </div>
                    <div class="stage-temoignage">
                        <h3>Témoigne</h3>
                        <p><?= $unePersonne["temoignage"]; ?></p>
                    </div>  
                </div>
        <?php
            endforeach;
        endforeach;
        ?>

    </div>
    
</section>
<!-- Fin de la section Stage -->