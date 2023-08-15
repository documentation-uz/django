# Field types

Proyektdagi istalgan bir ma'lumot, masalan mahsulotlar to'g'risidagi ma'lumotlarning jadval ko'rinishi:

| id |  nomi   |   narxi   |      tavsifi      |
|:--:|:-------:|:---------:|:-----------------:|
| 1  |  olma   |   10000   |      Shirin       |
| 2  | koptok  |  250000   | Charmdan qilingan |
| 3  | neksiya | 125000000 |      Tezkor       |

Bu jadval asosida djangoda model tuzishdan oldin har bir ustunda qanday turdagi ma'lumotlar saqlanishiga aniqlik kiritib
olishimiz kerak.

Masalan `nomi` nomli ustunda `str` toifasidagi ma'lumotlar saqlanishini va uzunligi ko'pi bilan `50`ta belgidan iborat
bo'lishini istasak, u holda

```python {4}
from django.db import models

class Mahsulot(models.Model):
    nomi = models.CharField(max_length=50)
    ...
```

::: tip
`CharField` orqali ro'yxatdan o'tkazilgan `field`larga faqat `str` toifasidagi ma'lumotlarni kiritish mumkin.

`max_length` atributi orqali esa biz uzunligi ko'pi bilan nechta belgidan iborat matn kiritish mumkinligini belgilaymiz.
:::

`narxi` nomli ustunga to'xtaladigan bo'lsak, bu `field`ga faqat `int` toifasidagi ma'lumotlarni kiritish mumkin deb
belgilasak, eng to'g'ri yechim bo'ladi. Buning uchun djangodagi `IntegerField` to'g'ri keladi.

```python {5}
from django.db import models

class Mahsulot(models.Model):
    nomi = models.CharField(max_length=50)
    narxi = models.IntegerField()
    ...
```

::: tip
`IntegerField` orqali ro'yxatdan o'tkazilgan `field`larga faqat `int` toifasidagi ma'lumotlarni kiritish mumkin.
:::

`tavsifi` nomli ustunda `str` toifasidagi ma'lumotlar saqlansada, katta hajmdagi matn kiritilishini hisobga olib,
djangodagi `TextField`dan foydalanishi maqsadga muvofiq bo'ladi.

```python {6}
from django.db import models

class Mahsulot(models.Model):
    nomi = models.CharField(max_length=50)
    narxi = models.IntegerField()
    tavsifi = models.TextField()
```

::: tip
`TextField` orqali ro'yxatdan o'tkazilgan `field`larga faqat `str` toifasidagi ma'lumotlarni kiritish mumkin
bo'lib, `CharField`dan farqli ravishda katta hajmdagi matnlarni kiritish uchun foydalaniladi.
:::

Yuqorida faqat `CharField`, `IntegerField`, `TextField` ko'rib chiqildi. Ular haqida batafsil ma'lumot olish va boshqa
field turlari bilan tanishish uchun [bu yerga](../../api-reference/model-fields/index.md) bosing.
