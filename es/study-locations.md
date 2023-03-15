---
page-title: Lugares de Realización del Estudio | CONTROL-RA
short-title: Lugares de Realización del Estudio
layout: es/study-locations
permalink: /es/study-locations
page-description: Para obtener más información sobre el estudio CONTROL-RA o para averiguar si es elegible, comuníquese con el centro más cercano a usted.
body-content: >-
  Para obtener más información sobre el estudio CONTROL-RA o para averiguar si es elegible, comuníquese con el centro más cercano a usted.
call-to-action-text: Encuentre la ubicación de un centro del estudio.
---

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

<div id="block-views-study-locations-block" class="block block--views block--views-study-locations-block">
<div class="block__content">
<div class="view view-study-locations view-id-study_locations view-display-id-block study-locations-list view-dom-id-57cf4bc011340331fe8520532352974b">

<div class="view-content">
    {% for state in names_uniq %}
      <div class="views-row-header">
        <h3> {{ state | upcase }} </h3>
      </div>
      
      {% assign state_loc = site.locations | where: "address-state", state | sort: "location-name" %}
      {% for sl in state_loc %}

      <div class="views-row views-row-1 views-row-odd views-row-first">
        <div class="views-field views-field-field-status">
          <div class="field-content location-status{% assign handle = sl.site-status | upcase %} {% case handle %} {% when "NOW RECRUITING" %}Now-Recruiting{% when "OPENING SOON" %}Opening-Soon{% when "CLOSED" %}Closed{% endcase %}"> {{sl.es-site-status}}</div>
        </div>
        <div class="views-field views-field-title">
          <h4 class="field-content">{{sl.location-name}}</h4>
        </div>
        <div class="views-field views-field-field-location-address">
          <div class="field-content">
            <div class="location vcard" itemscope itemtype="http://schema.org/PostalAddress">
              <div class="adr">
                <span class="fn" itemprop="name">{{sl.address-line-1}}</span>
                <div class="street-address">
                <span itemprop="streetAddress">{{sl.address-line-2}}</span>
                </div>
                <span class="locality" itemprop="addressLocality">{{sl.city-state}} {{sl.zip-code}}
                </span>
              </div>
              <div class="map-link">
                <i class="fa fa-external-link"></i> <a href="{{sl.directions}}" target="_blank">Get Directions</a>
              </div>
            </div>
         </div>
      </div>
      <div class="views-field views-field-field-location-invest-name">
         <div class="views-label views-label-field-location-invest-name location-investigator-label">Investigador principal: </div>
         <div class="field-content location-investigator clearfix">
            <div class="invest-info">
               <address>{{sl.principal-investigator}}</address>
            </div>
         </div>
      </div>
      <div class="views-field views-field-field-location-contact">
         <div class="views-label views-label-field-location-contact location-contact-label">Contáctenos para obtener más información: </div>
         <div class="field-content location-contact-info-section clearfix">

 <div class="entity entity-field-collection-item field-collection-item-field-location-contact clearfix" class="entity entity-field-collection-item field-collection-item-field-location-contact">
  <div class="content">
    <div class="field field--name-field-location-contact-name field--type-text field--label-hidden">
    <div class="field__items">
    <div class="field__item even">{{ sl.contact-name }}</div>
    </div></div>

    <div class="field field--name-field-location-contact-email field--type-email field--label-hidden">
    <div class="field__items">
    <div class="field__item even"><a href="mailto:{{ sl.contact-email }}">{{ sl.contact-email }}</a></div>
    </div></div>

    <div class="field field--name-field-location-contact-phone field--type-text field--label-hidden">
    <div class="field__items">
    <div class="field__item even">{{ sl.contact-phone }}</div>
    </div></div>

  </div>

  <div class="content">
    <div class="field field--name-field-location-contact-name field--type-text field--label-hidden">
    <div class="field__items">
    <div class="field__item even">{{ sl.contact-name-2 }}</div>
    </div></div>

    <div class="field field--name-field-location-contact-email field--type-email field--label-hidden">
    <div class="field__items">
    <div class="field__item even"><a href="mailto:{{ sl.contact-email-2 }}">{{ sl.contact-email-2 }}</a></div>
    </div></div>

    <div class="field field--name-field-location-contact-phone field--type-text field--label-hidden">
    <div class="field__items">
    <div class="field__item even">{{ sl.contact-phone-2 }}</div>
    </div></div>

  </div>
</div>

         </div>
      </div>
      <div class="views-field views-field-edit-node">        <span class="field-content"></span>  </div>

   </div>

      {% endfor %}
    {% endfor %}

</div>
</div></div></div>