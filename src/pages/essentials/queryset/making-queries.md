# Making queries

Django orqali baza bilan ishlash uchun bazaga turli xil so'rov yuboriladi. Masalan, bazadan biror modelga tegishli
barcha obyektlarni olish uchun quyidagicha so'rov beriladi:

```python
# Product modeliga tegishli barcha obyektlarni olish
products = Product.objects.all()
```

::: tip
`all()` metodi barcha obyektlarni olish uchun foydalaniladi.
:::

Barchasini emas, balki narxi 10 000 bo'lganlarini olish uchun esa,

```python
products = Product.objects.filter(narxi=10_000)
```

::: tip
Biror shartni bajaradigan obyektlarni olish uchun `filter()` metodidan foydalaniladi.
:::

`all()`, `filter()` kabi metodlarning to'liq ro'yxati bilan [bu yerda](../../api-reference/queryset-methods/index.md)
tanishib chiqishingiz mumkin.
