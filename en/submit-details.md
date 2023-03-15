---
page-title: Submit Details | CONTROL-RA
short-title: Submit Details
layout: en/submit-details
permalink: /submit-details
page-description: Congratulations! According to your responses, you potentially qualify for the CONTROL-RA study. If you would like to receive more information about participating, please enter your information below and a member of the study team will contact you within 48 hours.
body-content: Congratulations! According to your responses, you potentially qualify for the CONTROL-RA study. If you would like to receive more information about participating, please enter your information below and a member of the study team will contact you within 48 hours.
---

<form class="webform-client-form webform-client-form-none webform-client-form-4" enctype="multipart/form-data" action="/submit-details" method="post" id="webform-client-form-4" accept-charset="UTF-8">
    <fieldset class="webform-component-fieldset form-wrapper clearfix" id="webform-component-your-contact-information">
        <div class="fieldset-legend">Your Contact Information</div>
        <div class="fieldset-wrapper">
            {% assign fields = site.contacts | sort: "field-number" %}
            {% for field in fields %}
                {% if field.field-type == "text" or field.field-type == "email" %}
                <div class="form-item webform-component webform-component-textfield webform-container-inline">
                    {% if field.required == "Yes" %}
                        <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.field-name | capitalize}} <span class="form-required" title="This field is required.">*</span></label>
                        <input type="{{field.field-type}}" id="edit-submitted-your-contact-information-{{field.field-name | slugify}}" value="" size="40" maxlength="128" class="form-text form-field required" title="{{field.field-name | capitalize}}"/>
                    {% else %}
                        <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.field-name | capitalize}}</label>
                        <input type="{{field.field-type}}" id="edit-submitted-your-contact-information-{{field.field-name | slugify}}" value="" size="40" maxlength="128" class="form-text form-field" title="{{field.field-name | capitalize}}"/>
                    {% endif %}
                </div>
                {% elsif field.field-type == "selection" and field.field-name != "Nearest Location" %}
                <div class="form-item webform-component webform-component-select">
                    {% if field.required == "Yes" %}
                        <div class="form-item webform-component webform-component-select">
                            <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.field-name | capitalize}} <span class="form-required" title="This field is required.">*</span></label>
                            <select id="edit-submitted-your-contact-information--{{field.field-name | slugify}}" name="{{field.field-name | slugify}}" class="form-select form-field required" title="{{field.field-name | capitalize}}">
                                    <option value="" selected="selected">- Select -</option>
                                    {% assign choices = field.choices | split: "; " %}
                                    {% for choice in choices %}
                                        <option value="{{choice | capitalize}}">{{choice | capitalize}}</option>
                                    {% endfor %}
                            </select>
                        </div>
                    {% else %}
                        <div class="form-item webform-component webform-component-select">
                            <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.field-name | capitalize}}</label>
                            <select id="edit-submitted-your-contact-information--{{field.field-name | slugify}}" name="{{field.field-name | slugify}}" class="form-select form-field" title="{{field.field-name | capitalize}}">
                                    <option value="" selected="selected">- Select -</option>
                                    {% assign choices = field.choices | split: "; " %}
                                    {% for choice in choices %}
                                        <option value="{{choice | capitalize}}">{{choice | capitalize}}</option>
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
                        <label for="edit-submitted-your-contact-information-{{field.field-name | slugify}}">{{field.field-name | capitalize}} <span class="form-required" title="This field is required.">*</span></label>
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
        <p>User Agreement:</p>
        <p class="small-text">I understand that any personal information collected about me will be stored on a secure database and treated as confidential. Information about me will only be used to help determine my eligibility for participation in this clinical trial and will not be distributed to any third party, unless my specific consent to do so is provided.</p>
    </div>
    <div class="form-item webform-component webform-component-checkboxes" id="webform-component-terms">
        <label class="element-invisible" for="edit-submitted-terms">User Agreement <span class="form-required" title="This field is required.">*</span></label>
        <div id="edit-submitted-terms" class="form-checkboxes">
            <div class="form-item form-type-checkbox form-item-submitted-terms-agree">
                <input type="checkbox" id="edit-submitted-terms-1" name="submitted[terms][agree]" value="agree" class="form-checkbox form-field required" title="User Agreement"/> <label class="option" for="edit-submitted-terms-1">I understand and agree to these terms.</label>
            </div>
        </div>
    </div>
    <div class="form-actions form-wrapper" id="edit-actions">
        <input type="submit" id="edit-submit" name="op" value="Submit" class="form-submit" style="background-color: {{site.data.theme.linkcolor}};"/>
    </div>
</form>