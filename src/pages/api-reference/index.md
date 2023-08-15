---
outline: deep
---

# API reference

## Model

### Model fields

* AutoField
* BinaryField
* BooleanField
* CharField
* DateField
* DateTimeField
* DecimalField
* DurationField
* EmailField
* FileField
* FilePathField
* FloatField
* GenericIPAddressField
* ImageField
* IntegerField
* JSONField
* SlugField
* TextField
* TimeField
* URLField
* UUIDField
* ForeignKey
* ManyToManyField
* OneToOneField

### Model field options

* null
* blank
* choices
* db_column
* db_comment
* db_index
* db_tablespace
* default
* editable
* error_messages
* help_text
* primary_key
* unique
* unique_for_day
* unique_for_month
* unique_for_year
* verbose_name
* validators

### Model Meta options

* abstract
* app_label
* base_manager_name
* db_table
* db_table_comment
* db_tablespace
* default_manager_name
* default_related_name
* get_latest_by
* managed
* order_with_respect_to
* ordering
* permissions
* default_permissions
* proxy
* required_db_features
* required_db_vendor
* select_on_save
* indexes
* unique_together
* index_together
* constraints
* verbose_name
* verbose_name_plural
* label
* label_lower

## QuerySet

### QuerySet methods

* all
* filter
* exclude
* annotate
* alias
* order_by
* reverse
* distinct
* values
* values_list
* dates
* datetimes
* none
* union
* intersection
* difference
* select_related
* prefetch_related
* extra
* defer
* only
* using
* select_for_update
* raw
* get
* create
* get_or_create
* update_or_create
* bulk_create
* bulk_update
* count
* in_bulk
* iterator
* latest
* earliest
* first
* last
* aggregate
* exists
* contains
* update
* delete
* as_manager
* explain

### QuerySet field lookups

* exact
* iexact
* contains
* icontains
* in
* gt
* gte
* lt
* lte
* startswith
* istartswith
* endswith
* iendswith
* range
* date
* year
* iso_year
* month
* day
* week
* week_day
* iso_week_day
* quarter
* time
* hour
* minute
* second
* isnull
* regex
* iregex

### QuerySet aggregation functions API reference

* Avg
* Count
* Max
* Min
* StdDev
* Sum
* Variance
