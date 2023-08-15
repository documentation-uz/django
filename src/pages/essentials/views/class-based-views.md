# Class based views

Klassga asoslangan viewda har bir metod holati uchun alohida funksiya yoziladi.

```python
from django.views import View
from django.http import HttpResponse

class ExampleView(View):
    def get(self, request):
        return HttpResponse("Bu matn GET metodi bilan murojaat qilinganda ekranga chiqadi")
        
    def post(self, request):
        return HttpResponse("Bu matn POST metodi bilan murojaat qilinganda ekranga chiqadi")
```

Agar viewga `GET` so'rovi bilan murojaat qilinsa, `get()` metodi ichidagi kod ishlaydi. Xuddi shunday `POST`
bo'lganda `post()` metodi, `PUT` uchun `put()` metodi, `PATCH` uchun `patch()` metodi, `DELETE` uchun esa `delete()`
metodi ichidagi kod ishlaydi.

Umumiy holatda:

```python
from django.views import View
from django.http import HttpResponse

class ExampleView(View):
    def get(self, request):
        return HttpResponse("GET metodi bilan murojaat qilindi")
        
    def post(self, request):
        return HttpResponse("POST metodi bilan murojaat qilindi")
        
    def put(self, request):
        return HttpResponse("PUT metodi bilan murojaat qilindi")
        
    def patch(self, request):
        return HttpResponse("PATCH metodi bilan murojaat qilindi")
        
    def delete(self, request):
        return HttpResponse("DELETE metodi bilan murojaat qilindi")
```

Urlda ro'yxatdan o'tkazishda funksiyaga asoslangan view bilan ozgina farqi bor. Klassga asoslangan viewlarni urlda
ro'yxatdan o'tkazganda `as_view()` metodidan foydalaniladi.

```python {5}
from django.urls import path
from myapp.views import ExampleView

urlpatterns = [
    path('example/', ExampleView.as_view(), name='example')
]
```
