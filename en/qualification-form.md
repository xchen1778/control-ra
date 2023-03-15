---
page-title: Qualification Form | CONTROL-RA
short-title: Qualification Form
layout: en/qualification-form
permalink: /qualification-form
page-description: To see if you may qualify to participate in CONTROL-RA, please answer the following questions to the best of your ability. It should take no more than 5 minutes to complete this pre-screening process. If you pass the pre-screening questions, you will have the opportunity to forward your contact information to a clinical research center near you. The center will contact you to ask more questions and possibly schedule a screening appointment.
body-content: >-
  To see if you may qualify to participate in CONTROL-RA, please answer the following questions to the best of your ability. It should take no more than 5 minutes to complete this pre-screening process. If you pass the pre-screening questions, you will have the opportunity to forward your contact information to a clinical research center near you. The center will contact you to ask more questions and possibly schedule a screening appointment.
---

<form class="webform-client-form webform-client-form-3" enctype="multipart/form-data"  action="/qualification-form" method="post" id="webform-client-form-3" accept-charset="UTF-8">
    {% assign questions = site.qualifications %}
    {% for question in questions %}
        {% assign choices = question.choices | split: "; " %}
        {% if question.question-type == 'checkbox' %}
        <fieldset class="webform-component-fieldset form-wrapper clearfix">
            <div class="qnumber">{{question.question-number}}.</div>
            <div class="fieldset-legend">{{question.question}} <span class="form-required" title="This field is required.">*</span></div>
            <div class="fieldset-wrapper">
                <div class="form-item webform-component webform-component-{{question.question-type}}es" id="{{question.question | slugify}}">
                <label class="element-invisible" for="{{question.question | slugify}}">{{question.question}}<span class="form-required" title="This field is required.">*</span></label>
                    <div class="form-{{question.question-type}}es question-group" title="{{question.question}}">
                    {% for choice in choices %}
                        <div class="form-item form-type-{{question.question-type}}">
                            {% if question.non-desired-answer == choice %}
                                <input type="{{question.question-type}}" id="{{question.question | slugify}}-{{choice | slugify}}" name="{{question.question | slugify}}" value="{{choice | downcase}}" class="form-{{question.question-type}} non-desired-answer" />
                            {% else %}
                                <input type="{{question.question-type}}" id="{{question.question | slugify}}-{{choice | slugify}}" name="{{question.question | slugify}}" value="{{choice | downcase}}" class="form-{{question.question-type}}" />
                            {% endif %}
                            <label class="option" for="{{question.question | slugify}}-{{choice | slugify}}">{{choice}}</label>
                        </div>
                    {% endfor %}
                    </div>
                </div>
            </div>
        </fieldset>
        {% elsif question.question-type == 'radio' %}
        <fieldset class="webform-component-fieldset form-wrapper clearfix">
            <div class="qnumber">{{question.question-number}}.</div>
            <div class="fieldset-legend">{{question.question}} <span class="form-required" title="This field is required.">*</span></div>
            <div class="fieldset-wrapper">
                <div class="form-item webform-component webform-component-{{question.question-type}}s" id="{{question.question | slugify}}">
                    <label class="element-invisible" for="{{question.question | slugify}}">{{question.question}}<span class="form-required" title="This field is required.">*</span></label>
                    <div class="form-{{question.question-type}}s question-group" title="{{question.question}}" style="display:flex; gap:1.5rem;">
                        {% for choice in choices %}
                        <div class="form-item form-type-{{question.question-type}}">
                            {% if question.desired-answer == choice %}
                                <input type="{{question.question-type}}" id="{{question.question | slugify}}-{{choice | slugify}}" name="{{question.question | slugify}}" value="{{choice | downcase}}" class="form-{{question.question-type}} desired-answer" />
                            {% else %}
                                <input type="{{question.question-type}}" id="{{question.question | slugify}}-{{choice | slugify}}" name="{{question.question | slugify}}" value="{{choice | downcase}}" class="form-{{question.question-type}}" />
                            {% endif %}
                            <label class="option" for="{{question.question | slugify}}-{{choice | slugify}}">{{choice}}</label>
                        </div>
                        {% endfor %}                     
                    </div>
                </div>
            </div>
        </fieldset>
        {% endif %}
    {% endfor %}
    <div class="form-actions form-wrapper" id="edit-actions">
        <input type="submit" id="edit-submit" name="op" value="Submit" class="form-submit" style="background-color: {{site.data.theme.linkcolor}};"/>
    </div>
</form>