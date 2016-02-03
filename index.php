<?php

use Pagekit\Application;

return [
    // --------------- ОСНОВНЫЕ ---------------
    'name' => 'todolink', // уникальное имя, идентифицирующий модуль
    'type' => 'extension', // тип модуля

    'events' => [
        'view.scripts' => function ($event, $scripts) {
            $scripts->register('todolink', 'todolink:js/link-todo.js', '~panel-link');
        }
    ],

    // --------------- СОКРАЩЕНИЯ ---------------
    'resources' => [
        'todolink:' => ''
    ]
];
