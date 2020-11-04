        <!-- Début de la section Evenement -->
        <section id="Evenement">
            <div>
                <h1>Évènement</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas corrupti nisi incidunt, omnis quas laborum quia aspernatur. Neque unde laudantium odit, veniam molestiae ad reiciendis repellat facilis assumenda aperiam consectetur!
                    Quas voluptas, optio saepe tempora quaerat repellendus sapiente dolores commodi temporibus fugiat molestias, labore perferendis quis eos cum soluta voluptatum libero sunt. Inventore consequatur corrupti quo nostrum praesentium. Id, qui?
                </p>
                <button>Inscrivez-vous</button>
            </div>
            <div class="calendrier">
                <table class="mois">
                    <tr><th><?php echo date("F Y") ?></th></tr>
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
                                } 

                                else if (($compteur - $premierJour) >= $nbJours) {
                                    $date = ($compteurMois);
                                    $compteurMois++;

                                } 
                                else {
                                    $date = ($compteur - $premierJour + 1);
                                    if ($aujourdhui == $compteur - $premierJour + 1) {
                                    }
                                }


                                echo '<td '.
                                '><a class="date">'.$date.
                                '</a></td>';

                                $compteur++;
                            }
                            echo '</tr>';
                        } 

                    ?>

                </table>
            </div>
        </section>
        <!-- Fin de la section Evenement -->