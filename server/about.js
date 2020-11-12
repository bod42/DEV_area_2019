module.exports = function (app) {
        app.get('/about.json', function(req,res) {
            let ip = req.ip;
            if (ip.substr(0, 7) === "::ffff:")
            ip = ip.substr(7);
            res.json(
                {
                    client : {
                        "host":  ip
                    },
                    server: {
                        current_time: Math.round(new Date().getTime()/1000),
                        services: [
                            {
                                name: "Trello",
                                action: [
                                    {
                                        "name": "action_moved_card_lower",
                                        "description": "Move a card upper",
                                    },
                                    {
                                        "name": "action_moved_card_higher",
                                        "description": "Move a card lower",
                                    },
                                    {
                                        "name": "action_added_list_to_board",
                                        "description": "Add a new list to the board",
                                    },
                                    {
                                        "name": "action_moved_list_left",
                                        "description": "Move a list to the left",
                                    },
                                    {
                                        "name": "action_archived_list",
                                        "description": "Archived a list",
                                    },
                                    {
                                        "name": "action_moved_list_right",
                                        "description": "Move a list to the right",
                                    },
                                    {
                                        "name": "action_create_card",
                                        "description": "Create a new card",
                                    },
                                    {
                                        "name": "action_renamed_card",
                                        "description": "Rename a card",
                                    },
                                    {
                                        "name": "action_move_card_from_list_to_list",
                                        "description": "Move a list to a list",
                                    },
                                    {
                                        "name": "action_added_a_due_date",
                                        "description": "Action added due a date",
                                    },
                                    {
                                        "name": "action_changed_a_due_date",
                                        "description": "Change action due a date",
                                    },
                                    {
                                        "name": "action_member_joined_card",
                                        "description": "Add a new member to a card",
                                    },
                                    {
                                        "name": "action_member_left_card",
                                        "description": "Delete a member to a card",
                                    },
                                    {
                                        "name": "action_sent_card_to_board",
                                        "description": "Sent a card to the board",
                                    },
                                    {
                                        "name": "action_delete_card",
                                        "description": "Delete a card",
                                    },
                                    {
                                        "name": "action_archived_card",
                                        "description": "Archived a card",
                                    },
                                    {
                                        "name": "action_changed_description_of_card",
                                        "description": "Change description of a card",
                                    },
                                    {
                                        "name": "action_comment_on_card",
                                        "description": "Comment a card",
                                    },

                                ],
                                reaction: [
                                    {
                                        "name": "Catch them all",
                                        "description": "Get a random Pokemon",
                                    },
                                    {
                                        "name": "Berry grow on Planet star wars",
                                        "description": "Pokemon berry grow on which Star Wars planet",
                                    },
                                    {
                                        "name": "Star wars planet population pokemon",
                                        "description": "get SW planet with its Pokemon",
                                    },
                                    {
                                        "name": "Pokemon favorite berry",
                                        "description": "get Pokemon with its favourite Pokemon berry",
                                    },
                                    {
                                        "name": "star wars pet pokemon",
                                        "description": "get SW character with his/her favourite Pokemon",
                                    },
                                    {
                                        "name": "Starships carry pokemon",
                                        "description": "get SW star ship with its carried Pokemon",
                                    },
                                    {
                                        "name": "Random berry",
                                        "description": "get a random berry",
                                    },
                                    {
                                        "name": "Random planet",
                                        "description": "random SW planet",
                                    },
                                    {
                                        "name": "Random Star wars specie",
                                        "description": "random SW specie",
                                    },
                                    {
                                        "name": "Pokemon pet specie",
                                        "description": "get Pokemon with its SW specie best friend",
                                    },
                                    {
                                        "name": "Star wars carried berry",
                                        "description": "get SW star ship with its carried Pokemon berry",
                                    },
                                    {
                                        "name": "EWeather of Paris / London",
                                        "description": "weather of Paris, France",
                                    },
                                    {
                                        "name": "Random star wars chara",
                                        "description": "random SW character",
                                    },
                                    {
                                        "name": "Random starship",
                                        "description": "random SW star ship",
                                    },
                                    {
                                        "name": "star wars species favorite berry",
                                        "description": "get SW specie with its favourite Pokemon berry",
                                    }
                                ]
                            },
                            {
                                name: "Gitlab",
                                action: [
                                    {
                                        "name": "Post commit",
                                        "description": "Create a new commit on gitlab",
                                    }
                                ],
                                reaction: [
                                    {
                                        "name": "Discord looking you",
                                        "description": "Create in the discord a message of the commit",
                                    }
                                ]
                            }
                        ]
                    }
                }
            )
        });
    }