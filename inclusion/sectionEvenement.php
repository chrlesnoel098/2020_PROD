<!-- 
    Section de la page qui contient les informations d'évènements et un calendrier php dynamique
    Auteur : Lauryan Gervais
    Version 14/12/2020
 -->

        <!-- Début de la section Evenement -->
        <section id="Evenement">
        <!-- DIV contenant les informations des évènements -->
            <div class="information">
                <h1 id="SectionEvenement">Évènement</h1>
                <div class="infoEvenement">
                    <div class="info infoCarousel">
                        <h3 class="titreInfo">Particularités</h3>
                        Comme étudiant en Techniques d’intégration multimédia, vous serez encouragé à participer à
                        différents concours.
                        <ul>
                            <li>Olympiades québécoises de la formation professionnelle technique</li>
                            <li>Olympiades canadiennes de la formation professionnelle et technique</li>
                            <li>Concours d’affiches et autres</li>
                        </ul>
                    </div>
                    <div class="info infoCarousel">
                        <h3 class="titreInfo">Des ateliers en sciences et technologie destinés aux filles</h3>
                        Découvrez nos 3 vidéos qui visent à promouvoir auprès des filles des métiers traditionnellement
                        masculins, car elles ont également leur place en technologie.
                        <br>
                        <br>
                        <a
                            href="https://citoyen.cmaisonneuve.qc.ca/section/soutien-scolaire/projets-soutien-scolaire/des-ateliers-en-sciences-et-technologie-destines-aux-filles/">
                            Des ateliers en sciences et technologie destinés aux filles
                        </a>
                    </div>

                    <div class="info infoCarousel">
                        <h3 class="titreInfo">Perspectives d’emploi</h3>
                        83,3 % des diplômés qui se destinaient au marché du travail ont trouvé un emploi lié à leur
                        formation*
                        <br><br>
                        À la fin de vos études, vous travaillerez comme :
                        <ul>
                            <li>intégrateur ou programmeur multimédia,</li>
                            <li>développeur Web,</li>
                            <li>concepteurs de jeux interactifs,</li>
                            <li>développeur d’applications mobiles,</li>
                            <li>chargé de projet Web,</li>
                            <li>animateur 2D/3D,</li>
                            <li>designer/infographiste,</li>
                            <li>stratège Web,</li>
                            <li>webmestre.</li>
                        </ul>
                        <span>
                            Source : Ministère de l’Éducation et de l’Enseignement supérieur. (2019). La Relance au collégial en
                            formation technique. La situation d’emploi de titulaires d’un diplôme d’études collégiales (DEC) ou
                            d’une attestation d’études collégiales (AEC). Enquête de 2018. Québec, Québec : Gouvernement du
                            Québec.
                        </span>
                    </div>
                    <div class="info infoCarousel">
                        <h3 class="titreInfo">Perspectives universitaires</h3>
                        Vous pourrez poursuivre vos études dans ce domaine ou accéder à tous les programmes dont le
                        préalable est un DEC.

                        <ul>
                            <li>DEC-BAC en <a href="https://www.uqat.ca/etudes/creation-et-nouveaux-medias/baccalaureat-en-creation-numerique-profils-informatique-cinema-creation-3d-technologie-web/" target="_blank">création 3D et en création numérique</a> à l’UQAT, campus de Montréal</li>
                            <li>BAC en <a href="http://www.etsmtl.ca/Etudes/Premier-cycle/Baccalaureat-genie-des-TI" target="_blank">génie des technologies</a> de l’information ou en <a href="http://www.etsmtl.ca/Etudes/Premier-cycle/Baccalaureat-genie-logiciel" target="_blank">génie logiciel à l’ÉTS</a> </li>
                            <li>BAC en communication <a href="https://etudier.uqam.ca/programme?code=6504&version=20183" target="_blank">(création médias – médias interactifs)</a> à l’UQAM</li>
                            <li>Plusieurs programmes sont accessibles à Polytechnique en faisant 5 cours préparatoires</li>
                        </ul>

                    </div>

                    <?php
                        // Lire le fichier JSON dans une chaîne de caractères
                        $listeEvenementJSONString = file_get_contents("data/listeEvenement.json");

                        // Décoder la chaîne JSON dans une structure de données PHP
                        $EvenementJSON = json_decode($listeEvenementJSONString, true);

                         foreach ($EvenementJSON as $evenement => $unEvenement) :
                            foreach ($unEvenement as $infoEvenement) :
                                // Formatte la date dans le format : 1 janvier
                                setlocale(LC_TIME,"fr");
                                $today = utf8_encode(strftime("%e %B"));

                                // Si la date d'aujourd'hui est la même que la date d'un évènement dans le fichier json, l'évènement s'affiche
                                if($infoEvenement["date"] == $today) :
                    
                    ?>
                    <div class="info infoCarousel">
                        <h3 class="titreInfo"> <?= $infoEvenement["nom"]; ?> </h3>
                        <?= $infoEvenement["message"]; ?>

                    </div>

                    <?php
                        endif; 
                        endforeach;
                        endforeach;
                    ?>
                    
                </div>
            </div>
            <!-- DIV contenant le calendrier. Le calendrier est générer dynamiquement dans un TABLE. La date d'aujourd'hui est mise en valeur -->
            <div class="calendrier">
                <table class="mois">
                    <tbody>
                        <tr class="moisActuel">
                            <th colspan="7"><h2><?php setlocale(LC_TIME,"fr"); echo ucfirst(utf8_encode(strftime("%B %Y"))) ?></h2></th>
                        </tr>
                        <tr class="jourSemaine">
                            <td>Lundi</td>
                            <td>Mardi</td>
                            <td>Mercredi</td>
                            <td>Jeudi</td>
                            <td>Vendredi</td>
                            <td>Samedi</td>
                            <td>Dimanche</td>
                        </tr>
                        <!-- https://tomsbigbox.com/generate-a-calendar-with-php/ -->
                        <?php
                        $aujourdhui = date("d"); // date d'aujourd'hui
                        $mois = date("m"); // mois actuel
                        $annee = date("Y"); // année actuelle
                        $nbJours = cal_days_in_month(CAL_GREGORIAN, $mois, $annee); // Nombre de jour dans le mois actuel

                        $moisPrecedent = date("t", mktime(0, 0, 0, $mois - 1, 1, $annee)); // Nombre de jour dans le mois précédent

                        $premierJour = date("N", mktime(0, 0, 0, $mois, 1, $annee)); // Premier jour du mois actuel
                        $dernierJour = date("N", mktime(0, 0, 0, $mois, $nbJours, $annee)); // Dernier jour du mois actuel
                        $moisPrecedentJour = $premierJour - 1; // Dernier jour du mois précédent

                        $compteur = 1;
                        $compteurMois = 1;

                        $class = '';

                        // Indique le nombre de row que nous avons besoin. 
                        //Si le premier jour tombe après un vendredi, nous avons 6 rows
                        if ($premierJour > 5) {
                            $rows = 6;
                        } 
                        //Si le premier jour tombe avant un vendredi, nous avons 5 rows
                        else {
                            $rows = 5;
                        }

                        //Boucle pour insérer les semaines qui sont contenues dans un tr
                        for ($i = 1; $i <= $rows; $i++) {
                            echo '<tr class="semaine">';

                            //Boucle pour insérer les jours
                            for ($x = 1; $x <= 7; $x++) {

                                if (($compteur - $premierJour) < 0) {
                                    $date = (($moisPrecedent - $moisPrecedentJour) + $compteur);
                                    $class = 'class="autreMois"';
                                } 

                                else if (($compteur - $premierJour) >= $nbJours) {
                                    $date = ($compteurMois);
                                    $compteurMois++;
                                    $class = 'class="autreMois"';

                                } 
                                else {
                                    $date = ($compteur - $premierJour +1);
                                    if ($aujourdhui == $compteur - $premierJour + 1) {
                                        $class= 'class="aujourdhui"';
                                    }
                                }


                                echo '<td '.$class.'><a class="date">'.$date.'</a></td>';

                                $compteur++;
                                $class = '';
                            }
                            echo '</tr>';
                        } 

                    ?>
                    </tbody>

                </table>
            </div>
        </section>
        <!-- Fin de la section Evenement -->