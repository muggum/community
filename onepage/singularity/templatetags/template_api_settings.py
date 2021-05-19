from django import template

register = template.Library()

@register.simple_tag
def FONT_AWESOME_TOKEN():
    return "569f6a16fb"
