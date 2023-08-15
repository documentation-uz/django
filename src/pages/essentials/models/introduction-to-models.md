# Introduction to models

Proyekt qilganimizda biz ma'lumotlar bilan ishlaymiz. Ma'lumotlarni esa bazada saqlaymiz. Aynan ma'lumotlarni bazada
qanday ko'rinishda saqlanishini model orqali boshqaramiz.

Masalan onlayn savdo bo'yicha proyekt qilganimizda bizda kategoriyalar, mahsulotlar, foydalanuvchilar va boshqa turdagi
ma'lumotlar bo'ladi.

Ularning har biri uchun djangoda biz model tuzamiz. Masalan mahsulotlar haqidagi ma'lumotlar jadval ko'rinishida
taxminan quyidagicha bo'lishi mumkin:

| id |  nomi   |   narxi   |      tavsifi      | kategoriya |
|:--:|:-------:|:---------:|:-----------------:|:----------:|
| 1  |  olma   |   10000   |      Shirin       |    meva    |
| 2  | koptok  |  250000   | Charmdan qilingan |   sport    |
| 3  | neksiya | 125000000 |      Tezkor       |  moshina   |

Jadval asosida djangoda model tuzadigan bo'lsak, u quyidagi ko'rinishda bo'ladi.

```python
from django.db import models

class Mahsulot(models.Model):
    nomi = models.CharField(max_length=50)
    narxi = models.IntegerField()
    tavsifi = models.TextField()
    kategoriya = models.ForeignKey(Kategoriya, on_delete=models.RESTRICT)
```

Bu yerda modelimiz `Mahsulot` deb nomlandi. `nomi`, `narxi`, `tavsifi`, `kategoriya` esa modelning `field`lari deyiladi.

E'tibor bergan bo'lsangiz, jadvaldagi `id` modelda yozilmagan. Sababi django avtomatik ravishda modelga `id` fieldini
qo'shib qo'yadi.

::: tip
Model ma'lumotlar bazasidagi tablega to'g'ri keladi.
:::


