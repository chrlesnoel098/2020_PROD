                <!-- Début de la section Etudiant -->
                <section id="Etudiant">
                    <h2 id="SectionEtudiant">Vie Etudiante</h1>

                        <!-- caroussel vie etudiante -->
                        <div class="vignette">
                            <?php
                            // Lire le fichier JSON dans une chaîne de caractères
                            $listeImagesJSONString = file_get_contents("data/imageVignette.json");

                            // Décoder la chaîne JSON dans une structure de données PHP
                            $imagesJSON = json_decode($listeImagesJSONString, true);

                            // Parcourir le tableau associatif imagesJSON
                            foreach ($imagesJSON as $evenement => $unEvenement) :
                            ?>

                                <?php
                                // Traverser le tableau numérique "plats"
                                foreach ($unEvenement as $uneVignette) :
                                ?>
                                    <!-- Modele image et texte -->
                                    <div class="image-carousselfade">
                                        <img src="images/testImageBd/<?= $uneVignette["image"]; ?>" alt="" class="clip-polygon fade">
                                        <h2><?= $evenement; ?></h2>
                                        <div class="text swipe">
                                            <h3><?= $uneVignette["evenement"]; ?></h3>
                                            <p><?= $uneVignette["description"]; ?></p>
                                        </div>
                                    </div>
                                    <!-- fin modele -->
                                <?php
                                endforeach;
                                ?>


                            <?php
                            endforeach;
                            ?>
                        </div>


                </section>
                <!-- Fin de la section Etudiant -->

                <!-- Début de la section Projet -->
                <section id="Projet">
                    <h1 id="SectionProjet">Projet</h1>

                    <ul class="descriptionProjet">
                        <h3>Jeu</h3>

                        <li><a target="_blank" href="http://tokebak.fmd1.koumbit.org/?fbclid=IwAR0VcrurIdDvtYJxtt0eEKyv9zz0xmrh3CBfIxxObGOyY7HIzrRqTwsH96Q">
                                <p>Hiver 2020 --> Premier prix à l’Intercollégial de création de jeux vidéo du Collège
                                    de Valleyfield</p>
                            </a></li>

                        <li><a target="_blank" href="https://jeu.tim.cmaisonneuve.qc.ca/galerie_unity/2019-2020.html">
                                <p>Bibliothèque de jeu</p>
                            </a></li>
                    </ul>

                    <ul class="descriptionProjet">
                        <h3>3D</h3>

                        <li><a target="_blank" href="https://www.youtube.com/user/TIMcreation3D">
                                <p>Création 3D des étudiants en multimédia du collège de maisonneuve</p>
                            </a></li>


                    </ul>


                </section>
                <!-- Fin de la section Projet -->