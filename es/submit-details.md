---
page-title: Enviar información | CONTROL-RA
short-title: Enviar información
layout: es/submit-details
permalink: /es/submit-details
page-description: ¡Felicitaciones! En función de las respuestas que brindó, usted podría cumplir con los requisitos para participar en el estudio CONTROL-RA. Si desea recibir más información sobre la participación, ingrese su información a continuación. Un miembro del equipo del estudio se comunicará con usted dentro de las siguientes 48 horas.
body-content: ¡Felicitaciones! En función de las respuestas que brindó, usted podría cumplir con los requisitos para participar en el estudio CONTROL-RA. Si desea recibir más información sobre la participación, ingrese su información a continuación. Un miembro del equipo del estudio se comunicará con usted dentro de las siguientes 48 horas.
---

<form class="webform-client-form webform-client-form-none webform-client-form-4" enctype="multipart/form-data" action="/submit-details" method="post" id="webform-client-form-4" accept-charset="UTF-8">
    <fieldset class="webform-component-fieldset form-wrapper clearfix" id="webform-component-your-contact-information">
        <div class="fieldset-legend">Su información de contacto</div>
        <div class="fieldset-wrapper">
            {% assign fields = site.contacts | sort: "field-number" %}
            {% for field in fields %}
                {% if field.field-type == "text" or field.field-type == "email" %}
                <div class="form-item webform-component webform-component-textfield webform-container-inline">
                    {% if field.required == "Yes" %}
                        <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.es-field-name | capitalize}} <span class="form-required" title="This field is required.">*</span></label>
                        <input type="{{field.field-type}}" id="edit-submitted-your-contact-information-{{field.field-name | slugify}}" value="" size="40" maxlength="128" class="form-text form-field required" title="{{field.field-name | capitalize}}"/>
                    {% else %}
                        <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.es-field-name | capitalize}}</label>
                        <input type="{{field.field-type}}" id="edit-submitted-your-contact-information-{{field.field-name | slugify}}" value="" size="40" maxlength="128" class="form-text form-field" title="{{field.field-name | capitalize}}"/>
                    {% endif %}
                </div>
                {% elsif field.field-type == "selection" and field.field-name != "Nearest Location" %}
                <div class="form-item webform-component webform-component-select">
                    {% if field.required == "Yes" %}
                        <div class="form-item webform-component webform-component-select">
                            <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.es-field-name | capitalize}} <span class="form-required" title="This field is required.">*</span></label>
                            <select id="edit-submitted-your-contact-information--{{field.field-name | slugify}}" name="{{field.field-name | slugify}}" class="form-select form-field required" title="{{field.field-name | capitalize}}">
                                    <option value="" selected="selected">- Select -</option>
                                    {% assign enChoices = field.choices | split: "; " %}
                                    {% assign esChoices = field.es-choices | split: "; " %}
                                    {% for choice in esChoices %}
                                        <option value="{{enChoices[forloop.index0] | capitalize}}">{{choice | capitalize}}</option>
                                    {% endfor %}
                            </select>
                        </div>
                    {% else %}
                        <div class="form-item webform-component webform-component-select">
                            <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.es-field-name | capitalize}}</label>
                            <select id="edit-submitted-your-contact-information--{{field.field-name | slugify}}" name="{{field.field-name | slugify}}" class="form-select form-field" title="{{field.field-name | capitalize}}">
                                    <option value="" selected="selected">- Select -</option>
                                    {% assign enChoices = field.choices | split: "; " %}
                                    {% assign esChoices = field.es-choices | split: "; " %}
                                    {% for choice in esChoices %}
                                        <option value="{{enChoices[forloop.index0] | capitalize}}">{{choice | capitalize}}</option>
                                    {% endfor %}
                            </select>
                        </div>
                    {% endif %}
                </div>
                {% elsif field.field-name == "Nearest Location" %}
                    {% assign delimiter = "," %}
                    {% assign names_str = "" %}
                    {% assign names = site.locations | map: 'address-state'%}
                    {% for name in names %}
                        {% assign names_arr = names_str | split: delimiter %}
                        {% unless names_arr contains name %}
                            {% assign names_str = names_str | append: delimiter | append: name %}
                        {% endunless %}
                    {% endfor %}
                    {% assign names_uniq = names_str | remove_first: delimiter | split: delimiter %}
                    {% assign names_uniq = names_uniq | sort %}
                    <div class="form-item webform-component webform-component-select">
                        <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.es-field-name | capitalize}} <span class="form-required" title="This field is required.">*</span></label>
                        <select id="edit-submitted-your-contact-information-{{field.field-name | slugify}}" name="{{field.field-name | slugify}}" class="form-select required" title="{{field.field-name | capitalize}}" style="max-width: 315.5px;">
                            <option value="" selected="selected">- Select -</option>
                            {% for state in names_uniq %}
                                {% assign state_loc = site.locations | where: "address-state", state | sort: "location-name" %}
                                {% for sl in state_loc %}
                                    {% if sl.site-status == "now recruiting" and sl.contact-email != "" %}
                                        <option value="{{sl.contact-email}}">{{sl.city-state}} - {{sl.location-name}}</option>
                                    {% endif %}
                                {% endfor %}
                            {% endfor %}  
                        </select>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </fieldset>
    <div class="form-item webform-component webform-component-markup" id="webform-component-user-agreement">
        <p>Acuerdo del Usuario:</p>
        <p class="small-text">Entiendo que cualquier información personal recopilada sobre mí se almacenará en una base de datos segura y se tratará de manera confidencial. La información sobre mí solo se utilizará para ayudar a determinar mi elegibilidad para participar en este ensayo clínico y no se distribuirá a ningún tercero, a menos que proporcione mi consentimiento específico para hacerlo.</p>
    </div>
    <div class="form-item webform-component webform-component-checkboxes" id="webform-component-terms">
        <label class="element-invisible" for="edit-submitted-terms">User Agreement <span class="form-required" title="This field is required.">*</span></label>
        <div id="edit-submitted-terms" class="form-checkboxes">
            <div class="form-item form-type-checkbox form-item-submitted-terms-agree">
                <input type="checkbox" id="edit-submitted-terms-1" name="submitted[terms][agree]" value="agree" class="form-checkbox form-field required" title="User Agreement"/> <label class="option" for="edit-submitted-terms-1">Entiendo y acepto estos términos.</label>
            </div>
        </div>
    </div>
    <div class="form-actions form-wrapper" id="edit-actions">
        <input type="submit" id="edit-submit" name="op" value="Enviar" class="form-submit" style="background-color: {{site.data.theme.linkcolor}};"/>
    </div>
</form>