# View decorators

Viewda djangodagi dekoratorlardan foydalanish bir muncha qulayliklar taqdim etadi.

Masalan:

```python {3}
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET", "POST"])
def allowed_methods_view(request):
    return HttpResponse("Your method of request is GET or POST.")
```

Bu yerda `require_http_methods` dekoratori orqali viewga faqat `GET` va `POST` metodlari orqali murojaat qilish mumkin
deb belgilandi. Bu degani `allowed_methods_view`ga faqat `GET` va `POST` metodlari bilan murojaat qilish mumkin.

Dekoratorlarning to'liq ro'yxati bilan [bu yerda](../../api-reference/view-decorators/index.md) tanishib chiqishingiz
mumkin.
