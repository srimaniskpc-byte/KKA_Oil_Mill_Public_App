from django.http import JsonResponse
from .models import Product, CompanySettings


def website_data(request):
    company = CompanySettings.objects.first()

    products = Product.objects.filter(is_active=True)

    company_data = None

    if company:
        company_data = {
            "company_name": company.company_name,
            "manufacturer_name": company.manufacturer_name,
            "address": company.address,
            "fssai_number": company.fssai_number,
            "about_text": company.about_text,
            "phone1": company.phone1,
            "phone2": company.phone2,
            "whatsapp_number": company.whatsapp_number,
            "facebook_url": company.facebook_url,
            "instagram_url": company.instagram_url,
            "show_facebook": company.show_facebook,
            "show_instagram": company.show_instagram,
        }

    product_data = []

    for product in products:
        image_url = None

        if product.image:
            image_url = request.build_absolute_uri(
                product.image.url
            )

        product_data.append({
            "name": product.name,
            "tamil_name": product.tamil_name,
            "pack_size": product.pack_size,
            "price": str(product.price),
            "show_price": product.show_price,
            "description": product.description,
            "image": image_url,
        })

    return JsonResponse({
        "company": company_data,
        "products": product_data,
    })