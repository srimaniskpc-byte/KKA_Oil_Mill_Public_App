from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=150)
    tamil_name = models.CharField(max_length=150, blank=True)
    pack_size = models.CharField(max_length=100, blank=True)

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    show_price = models.BooleanField(default=False)

    description = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="products/",
        blank=True,
        null=True
    )

    is_active = models.BooleanField(default=True)
    sort_order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["sort_order", "name"]

    def __str__(self):
        return self.name


class CompanySettings(models.Model):
    company_name = models.CharField(
        max_length=150,
        default="KKA Oil Mill"
    )

    manufacturer_name = models.CharField(
        max_length=150,
        default="Deepam Oils Mill"
    )

    address = models.TextField(blank=True)

    fssai_number = models.CharField(
        max_length=50,
        blank=True
    )

    about_text = models.TextField(blank=True)

    about_image = models.ImageField(
        upload_to="company/",
        blank=True,
        null=True
    )

    phone1 = models.CharField(
        max_length=30,
        blank=True
    )

    phone2 = models.CharField(
        max_length=30,
        blank=True
    )

    whatsapp_number = models.CharField(
        max_length=30,
        blank=True
    )

    facebook_url = models.URLField(
        blank=True
    )

    instagram_url = models.URLField(
        blank=True
    )

    show_facebook = models.BooleanField(
        default=True
    )

    show_instagram = models.BooleanField(
        default=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.company_name