---
layout: page
permalink: /datasets/
title: datasets
description: Materials for courses you taught. Replace this text with your description.
nav: false
nav_order: 5
---

<div class="container mt-4">
    <div class="row">
        {% for dataset in site.data.datasets %}
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title h4">{{ dataset.title }}</h5>
                    <hr class="mt-3 mb-2"> <!-- Title horizontal line -->
                    <p class="card-text">{{ dataset.description }}</p>
                    <hr class="mt-3 mb-2"> <!-- Description horizontal line -->
                    <h6 class="card-subtitle mb-2 text-muted">Authors:</h6>
                    <p class="card-text">{{ dataset.authors | join: ', ' }}</p>
                    <hr class="mt-3 mb-2"> <!-- Authors horizontal line -->
                    <p class="card-text">
                        <a href="{{ dataset.dataset_url }}" target="_blank">Dataset Details</a>
                    </p>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
