                        <!-- Auteur: Charles Noël -->
                        <!-- Début de la section Etudiant -->
                        <!-- Début de la section Projet -->
                        <section id="Projet">
                            <h1 id="SectionProjet">Vie étudiante & projets</h1>

                            <!-- caroussel vie etudiante -->
                            <div class="vignette-Projet">
                                <?php
                                // Lire le fichier JSON dans une chaîne de caractères
                                $listeImagesJSONString = file_get_contents("data/imageVignette.json");

                                // Décoder la chaîne JSON dans une structure de données PHP
                                $imagesJSON = json_decode($listeImagesJSONString, true);

                                // Parcourir le tableau associatif imagesJSON
                                foreach ($imagesJSON as $evenement => $unEvenement) :
                                ?>

                                    <?php
                                    // Traverser le tableau numérique
                                    foreach ($unEvenement as $uneVignette) :
                                    ?>
                                        <!-- Modele image et texte -->
                                        <div class="image-carousselfade">
                                            <div class="image-Projet">
                                                <img src="images/testImageBd/<?= $uneVignette["image"]; ?>" alt="" class="clip-polygon projetFadeIn">
                                            </div>
                                            <div class="info-Vignette">
                                                <h2><?= $evenement; ?></h2>
                                                <div class="text projetSwipe">
                                                    <h3><?= $uneVignette["evenement"]; ?></h3>
                                                    <p><?= $uneVignette["description"]; ?></p>
                                                </div>
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

                            <!-- les projets -->
                            <div id="projetAccordeon">
                                <?php
                                // Lire le fichier JSON dans une chaîne de caractères
                                $listeProjetsJSONString = file_get_contents("data/listeProjets.json");

                                // Décoder la chaîne JSON dans une structure de données PHP
                                $projetJSON = json_decode($listeProjetsJSONString, true);

                                // Parcourir le tableau associatif projetJSON
                                foreach ($projetJSON as $Categories => $uneCategorie) :
                                ?>
                                    <ul>
                                        <!-- Chaque cours d'une session dans un LI -->
                                        <?php
                                        // Traverser le tableau numérique "uneSession"
                                        foreach ($uneCategorie as $Projets => $unProjet) :
                                        ?>
                                            <li>
                                                <div class="section-title">
                                                    <h2><?= $unProjet["sousCategorie"]; ?></h2>

                                                </div>
                                                <div class="section-content">

                                                    <a target="_blank" href="<?= $unProjet["lien"]; ?>">
                                                        <h3> <?= $unProjet["description"]; ?></h3>
                                                    </a>
                                                </div>
                                            <?php
                                        endforeach;
                                            ?>
                                            </li>

                                        <?php
                                    endforeach;
                                        ?>
                                    </ul>
                            </div>

                        </section>
                        <!-- fin de la section projet -->