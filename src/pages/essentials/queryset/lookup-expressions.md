# Lookup expressions

`filter` metodidan foydalanib, bazadan obyektlarni olganimizda murakkabroq shartlar ham yozishimiz mumkin.

Masalan:

```python
talabalar = Talaba.objects.filter(yoshi__gt=20)
```

Yuqoridagi kod orqali bazadan `yoshi` 20dan katta bo'lgan talabalar ro'yxatini olamiz.

Yana bir misol:

```python
talabalar = Talaba.objects.filter(ismi__startswith='Ab')
```

Bu kod orqali esa `ismi` Ab bilan boshlanadigan talabalar ro'yxatini olishimiz mumkin.

`gt`, `startswith` lar `field lookup` deyiladi va ularning to'liq ro'yxati bilan [bu yerda](../../api-reference/queryset-field-lookups/index.md) tanishib chiqishingiz mumkin.

## Qoldi

```python
products = Product.objects.filter(category__name='Meva')
```
