---
layout: default
title: Contact Us
---

<div id="contact">
  <h1 class="pageTitle">Contact Us</h1>
  <div class="contactContent">
    <p class="intro">If you have any questions, or need to contact us about anything, please use this form to do so!</p>
    <p>Some questions may have already been answered on our <a href="/faq">FAQ</a> page.</p>
    <p>If you're trying to upload photos, please do that <a href="/upload"> on the upload page</a>.</p>
  </div>
  <form action="https://formspree.io/mvowjpqb" method="POST">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" class="full-width"><br>
    <label for="email">Email Address</label>
    <input type="email" id="email" name="_replyto" class="full-width"><br>
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10" class="full-width"></textarea><br>
    <input type="submit" value="Send" class="button">
  </form>
</div>
