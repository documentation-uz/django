# Generic views

Doimiy kodlarni umumlashtirish va natijaga tez erishishi uchun djangoda `generic view`lardan foydalaniladi.

Klassga asoslangan viewlarda html faylni render qilish quyidagicha bo'lsa,

```python
from django.views import View

class ExampleView(View):
    def get(self, request):
        return render(request, 'example.html')
```

Generic view orqali

```python
from django.views.generic import TemplateView

class ExampleView(TemplateView):
    template_name = 'example.html'
```

Shunchaki html faylni ko'rsatib qo'yish orqali natijaga erishish mumkin.

Generic viewlarning to'liq ro'yxati bilan [bu yerda](../../api-reference/view-generics/index.md) tanishib chiqishingiz
mumkin.
