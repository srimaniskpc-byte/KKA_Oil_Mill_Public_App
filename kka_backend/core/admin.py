from django.contrib import admin
from .models import Product, CompanySettings


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "tamil_name",
        "pack_size",
        "price",
        "show_price",
        "is_active",
        "sort_order",
    )

    list_filter = (
        "is_active",
        "show_price",
    )

    search_fields = (
        "name",
        "tamil_name",
        "pack_size",
    )

    ordering = (
        "sort_order",
        "name",
    )


@admin.register(CompanySettings)
class CompanySettingsAdmin(admin.ModelAdmin):
    list_display = (
        "company_name",
        "manufacturer_name",
        "phone1",
        "phone2",
        "whatsapp_number",
        "updated_at",
    )

    search_fields = (
        "company_name",
        "manufacturer_name",
        "phone1",
        "phone2",
        "whatsapp_number",
    )