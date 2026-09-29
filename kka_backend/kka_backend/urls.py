from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from django.urls import path
from core.views import website_data


def home(request):
    return HttpResponse("KKA Oil Mill Backend is running successfully.")


urlpatterns = [
    path("", home, name="home"),
    path("admin/", admin.site.urls),
    path("api/website-data/", website_data, name="website_data"),
]


if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )