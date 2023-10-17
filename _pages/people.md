---
layout: default
title: people
permalink: /people/
nav: true
nav_order: 1
subtitle:
---

## Faculty

<div class="row row-cols-3 projects pt-3 pb-3">
  {% for person in site.data.people %}
    {% if person.role == 'faculty' %}
      {% include people.html name=person.display_name affiliation=person.bio url=person.webpage img=person.image research_interests=person.research_interests %}
    {% endif %}
  {% endfor %}
</div>

---

## Ph.D. Students

<div class="row row-cols-2 projects pt-3 pb-3">
  {% for person in site.data.people %}
    {% if person.role == 'grad' %}
      {% include people_horizontal.html name=person.display_name affiliation=person.bio url=person.webpage img=person.image research_interests=person.research_interests %}
    {% endif %}
  {% endfor %}
</div>

---

## M.Tech. Students

<div class="row row-cols-2 projects pt-3 pb-3">
  {% for person in site.data.people %}
    {% if person.role == 'mtech' %}
      {% include people_horizontal.html name=person.display_name affiliation=person.bio url=person.webpage img=person.image research_interests=person.research_interests %}
    {% endif %}
  {% endfor %}
</div>

---

## B.Tech. Students

<div class="row row-cols-2 projects pt-3 pb-3">
  {% for person in site.data.people %}
    {% if person.role == 'btech' %}
      {% include people_horizontal.html name=person.display_name affiliation=person.bio url=person.webpage img=person.image research_interests=person.research_interests %}
    {% endif %}
  {% endfor %}
</div>

---

## Staff

<div class="row row-cols-2 projects pt-3 pb-3">
  {% for person in site.data.people %}
    {% if person.role == 'staff' %}
      {% include people_horizontal.html name=person.display_name affiliation=person.bio url=person.webpage img=person.image research_interests=person.research_interests %}
    {% endif %}
  {% endfor %}
</div>

---

## Alumni

<div class="row row-cols-3 projects pt-3 pb-3">
  {% for person in site.data.people %}
    {% if person.role == 'alum' %}
      {% include alumni.html name=person.display_name affiliation=person.bio url=person.webpage img=person.image research_interests=person.research_interests %}
    {% endif %}
  {% endfor %}
</div>
