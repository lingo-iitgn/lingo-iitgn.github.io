---
layout: page
permalink: /compute/
title: computing resources
description: computation resources for lingo, gpus going brrrrr.....
nav: false
nav_order: 5
---


<div class="container mt-4">
    <div class="row">
        {% for server in site.data.servers %}
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <div class="card-body text-center">
                    <h5 class="card-title h4">{{ server.name }}</h5>
                    <hr class="mt-3 mb-2"> <!-- Title horizontal line -->
                    <div class="element-title h5">Model Name</div>
                    <div class="element-info">{{ server.model_name }}</div>
                    <hr class="mt-3 mb-2"> <!-- Element horizontal line -->
                    <div class="element-title h5">CPU</div>
                    <div class="element-info"><strong>Processor:</strong> {{ server.cpu.processor }}</div>
                    <div class="element-info"><strong>Cores:</strong> {{ server.cpu.cores }}</div>
                    <div class="element-info"><strong>Processor Base Frequency:</strong> {{ server.cpu.base_frequency }}</div>
                    <div class="element-info"><strong>Maximum Memory Speed:</strong> {{ server.cpu.memory_speed }}</div>
                    <hr class="mt-3 mb-2"> <!-- Element horizontal line -->
                    <div class="element-title h5">GPU</div>
                    <div class="element-info"><strong>Processor:</strong> {{ server.gpu.processor }}</div>
                    <div class="element-info"><strong>Cores:</strong> {{ server.gpu.cores }}</div>
                    <hr class="mt-3 mb-2"> <!-- Element horizontal line -->
                    <div class="element-title h5">RAM</div>
                    <div class="element-info">{{ server.ram }}</div>
                    <hr class="mt-3 mb-2"> <!-- Element horizontal line -->
                    <div class="element-title h5">SSD</div>
                    <div class="element-info">{{ server.ssd }}</div>
                    <hr class="mt-3 mb-2"> <!-- Element horizontal line -->
                    <div class="element-title h5">Harddisk</div>
                    <div class="element-info">{{ server.harddisk }}</div>
                    <hr class="mt-3 mb-2"> <!-- Element horizontal line -->
                    <div class="element-title h5">NAS</div>
                    <div class="element-info">{{ server.nas }}</div>
                    <hr class="mt-3 mb-2"> <!-- Element horizontal line -->
                    <div class="element-title h5">OS</div>
                    <div class="element-info">{{ server.os }}</div>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
