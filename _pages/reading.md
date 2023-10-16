---
layout: page
permalink: /reading/
title: reading group
description: Materials for courses you taught. Replace this text with your description.
nav: false
nav_order: 5
---

For now, this page is assumed to be a static description of your courses. You can convert it to a collection similar to `_projects/` so that you can have a dedicated page for each course.

Organize your courses by years, topics, or universities, however you like!


<div class="container mt-5">
  <div class="table-container" style="max-height: 400px; overflow-y: auto;">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Paper Title</th>
          <th>Paper Link</th>
          <th>Attachments</th>
          <th>Speaker</th>
        </tr>
      </thead>
      <tbody>
        {% for item in site.data.reading %}
        <tr>
          <td>{{ item.date }}</td>
          <td>{{ item.paper_title }}</td>
          <td><a href="{{ item.paper_link }}">{{ item.paper_title }}</a></td>
          <td><a href="{{ item.attachments_link }}">{{ item.attachments_link }}</a></td>
          <!-- <td><a href="{{ item.paper_link }}">[PDF]</a></td>
          <td><a href="{{ item.attachments_link }}">[PPT]</a></td> -->
          <td>{{ item.speaker }}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>    
  </div>
</div>

