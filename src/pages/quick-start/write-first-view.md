# Write first view

Bu darsda browser oynasiga biror matnni qanday chiqarishni o'rganamiz. Buning uchun `product/views.py` ichiga quyidagi
kodni yozamiz.

::: code-group

```python [product/views.py]
from django.http import HttpResponse

def example(request): # har doim request argumenti bilan keladi
    return HttpResponse("Salom. Bu sizning djangodagi birinchi matningiz.")
```

:::

Saytning biror manzilida (masalan, `example.com/test/` yoki `text.uz/qoida/`) nima ko'rinishini, qanday amal bajarish 
kerakligini biz `views.py` fayliga yozamiz.

Endi biz `example` funksiyasi ishlashi uchun yuqoridagiga o'xshab, biror manzilga bog'lashimiz kerak. `config/urls.py`
fayliga kirib, quyidagicha o'zgartirish kiritamiz.

::: code-group

```python {2,4,8} [config/urls.py]
from django.contrib import admin
from django.urls import path, include

from product.views import example

urlpatterns = [
    path("admin/", admin.site.urls),
    path("example/", example)
]
```

:::

`example/` manzilida `example` funksiyasini ro'yxatdan o'tkazdik. Bizning asosiy manzil hozirda http://127.0.0.1:8000 
bo'lgani uchun browserda http://127.0.0.1:8000/example/ manziliga kirsak, `example` funksiyasi ishga kiradi.

::: tip Tavsiya
Tushunish oson bo'lishi uchun manzil nomini funksiya nomi bilan bir xil qilgan yaxshi.
:::
