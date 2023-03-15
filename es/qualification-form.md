---
page-title: Formulario de calificación | CONTROL-RA
short-title: Formulario de calificación
layout: es/qualification-form
permalink: /es/qualification-form
page-description: Para determinar si es posible que cumpla con los requisitos de participación en el estudio CONTROL-RA, le solicitamos que responda las siguientes preguntas con la mayor precisión posible. La realización de este proceso de preselección no debería llevarle más de cinco minutos. Si pasa las preguntas de preselección, tendrá la oportunidad de reenviar su información de contacto a un centro de investigación clínica que le quede cerca. El centro se comunicará con usted para hacerle más preguntas y, posiblemente, programar una cita de selección.
body-content: >-
  Para determinar si es posible que cumpla con los requisitos de participación en el estudio CONTROL-RA, le solicitamos que responda las siguientes preguntas con la mayor precisión posible. La realización de este proceso de preselección no debería llevarle más de cinco minutos. Si pasa las preguntas de preselección, tendrá la oportunidad de reenviar su información de contacto a un centro de investigación clínica que le quede cerca. El centro se comunicará con usted para hacerle más preguntas y, posiblemente, programar una cita de selección.
---

<form class="webform-client-form webform-client-form-3" enctype="multipart/form-data"  action="/qualification-form" method="post" id="webform-client-form-3" accept-charset="UTF-8">
    {% assign questions = site.qualifications %}
    {% for question in questions %}
        {% assign enChoices = question.choices | split: "; " %}
        {% assign esChoices = question.es-choices | split: "; " %}
        {% if question.question-type == 'checkbox' %}
        <fieldset class="webform-component-fieldset form-wrapper clearfix">
            <div class="qnumber">{{question.question-number}}.</div>
            <div class="fieldset-legend">{{question.es-question}} <span class="form-required" title="This field is required.">*</span></div>
            <div class="fieldset-wrapper">
                <div class="form-item webform-component webform-component-{{question.question-type}}es" id="{{question.question | slugify}}">
                <label class="element-invisible" for="{{question.question | slugify}}">{{question.es-question}}<span class="form-required" title="This field is required.">*</span></label>
                    <div class="form-{{question.question-type}}es question-group" title="{{question.question}}">
                    {% for choice in esChoices %}
                        <div class="form-item form-type-{{question.question-type}}">
                            {% if question.es-non-desired-answer == choice %}
                                <input type="{{question.question-type}}" id="{{question.question | slugify}}-{{choice | slugify}}" name="{{question.question | slugify}}" value="{{enChoices[forloop.index0] | downcase}}" class="form-{{question.question-type}} non-desired-answer" />
                            {% else %}
                                <input type="{{question.question-type}}" id="{{question.question | slugify}}-{{choice | slugify}}" name="{{question.question | slugify}}" value="{{enChoices[forloop.index0] | downcase}}" class="form-{{question.question-type}}" />
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
            <div class="fieldset-legend">{{question.es-question}} <span class="form-required" title="This field is required.">*</span></div>
            <div class="fieldset-wrapper">
                <div class="form-item webform-component webform-component-{{question.question-type}}s" id="{{question.question | slugify}}">
                    <label class="element-invisible" for="{{question.question | slugify}}">{{question.es-question}}<span class="form-required" title="This field is required.">*</span></label>
                    <div class="form-{{question.question-type}}s question-group" title="{{question.question}}" style="display:flex; gap:1.5rem;">
                        {% for choice in esChoices %}
                        <div class="form-item form-type-{{question.question-type}}">
                            {% if question.es-desired-answer == choice %}
                                <input type="{{question.question-type}}" id="{{question.question | slugify}}-{{choice | slugify}}" name="{{question.question | slugify}}" value="{{enChoices[forloop.index0] | downcase}}" class="form-{{question.question-type}} desired-answer" />
                            {% else %}
                                <input type="{{question.question-type}}" id="{{question.question | slugify}}-{{choice | slugify}}" name="{{question.question | slugify}}" value="{{enChoices[forloop.index0] | downcase}}" class="form-{{question.question-type}}" />
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
        <input type="submit" id="edit-submit" name="op" value="Enviar" class="form-submit" style="background-color: {{site.data.theme.linkcolor}};"/>
    </div>
</form>