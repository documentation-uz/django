import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Django documentation",
    description: "Django documentation in Uzbek language",
    srcDir: "src/pages/",
    head: [
        ['link', {rel: 'icon', href: 'https://static.djangoproject.com/img/favicon.6dbf28c0650e.ico'}],
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Documentation', link: '/quick-start/introduction'}
        ],

        sidebar: [
            {
                text: 'Quick start',
                items: [
                    {text: 'Introduction', link: '/quick-start/introduction'},
                    {text: 'Create new project', link: '/quick-start/create-new-project'},
                    {text: 'Create application', link: '/quick-start/create-application'},
                    {text: 'Write first view', link: '/quick-start/write-first-view'},
                    {text: 'Render html file', link: '/quick-start/render-html-file'},
                    {text: 'Load static file', link: '/quick-start/load-static-file'},
                    {text: 'Variables in html', link: '/quick-start/variables-in-html'},
                    {text: 'First model', link: '/quick-start/first-model'},
                    {text: 'Admin panel', link: '/quick-start/admin-panel'},
                    {text: 'Simple queryset', link: '/quick-start/simple-queryset'}
                ]
            },
            {
                text: 'Essentials', link: '/essentials/',
                items: [
                    {
                        text: 'Models', link: '/essentials/models/', collapsed: true,
                        items: [
                            {text: 'Introduction to models', link: '/essentials/models/introduction-to-models'},
                            {text: 'Field types', link: '/essentials/models/field-types'},
                            {text: 'Relationships', link: '/essentials/models/relationships'},
                            {text: 'Meta class', link: '/essentials/models/meta-class'},
                        ]
                    },
                    {
                        text: 'Admin', link: '/essentials/admin/', collapsed: true,
                        items: [
                            {text: 'Introduction to admin', link: '/essentials/admin/introduction-to-admin'},
                            {text: 'Register model', link: '/essentials/admin/register-model'},
                            {text: 'ModelAdmin', link: '/essentials/admin/model-admin'},
                            {text: 'Actions', link: '/essentials/admin/actions'},
                        ]
                    },
                    {
                        text: 'QuerySet', link: '/essentials/queryset/', collapsed: true,
                        items: [
                            {text: 'Making queries', link: '/essentials/queryset/making-queries'},
                            {text: 'Lookup expressions', link: '/essentials/queryset/lookup-expressions'},
                            {text: 'CRUD', link: '/essentials/queryset/crud'},
                        ]
                    },
                    {
                        text: 'Views', link: '/essentials/views/', collapsed: true,
                        items: [
                            {text: 'Introduction to views', link: '/essentials/views/introduction-to-views'},
                            {text: 'Request methods', link: '/essentials/views/request-methods'},
                            {text: 'Function based views', link: '/essentials/views/function-based-views'},
                            {text: 'URLs', link: '/essentials/views/urls'},
                            {text: 'View decorators', link: '/essentials/views/view-decorators'},
                            {text: 'File uploads', link: '/essentials/views/file-uploads'},
                            {text: 'Class based views', link: '/essentials/views/class-based-views'},
                            {text: 'Render html file', link: '/essentials/views/render-html-file'},
                            {text: 'Generic views', link: '/essentials/views/generic-views'},
                            {text: 'Mixins', link: '/essentials/views/mixins'},
                        ]
                    },
                    {
                        text: 'Templates', link: '/essentials/templates/', collapsed: true,
                        items: [
                            {text: 'Tags and filters', link: '/essentials/templates/tags-and-filters'},
                            {text: 'Humanization', link: '/essentials/templates/humanization'},
                            {text: 'Layout', link: '/essentials/templates/layout'},
                            {text: 'Component', link: '/essentials/templates/component'},
                        ]
                    },
                    {
                        text: 'Forms', link: '/essentials/forms/', collapsed: true,
                        items: [
                            {text: 'Introduction to forms', link: '/essentials/forms/introduction-to-forms'},
                            {text: 'Usage', link: '/essentials/forms/usage'},
                            {text: 'Forms for models', link: '/essentials/forms/forms-for-models'},
                        ]
                    },
                    {
                        text: 'Authentication', link: '/essentials/authentication'
                    },
                    {
                        text: 'Caching', link: '/essentials/caching'
                    },
                    {
                        text: 'Pagination', link: '/essentials/pagination'
                    },
                    {
                        text: 'Sessions', link: '/essentials/sessions'
                    },
                    {
                        text: 'Static files management', link: '/essentials/static-files-management'
                    },
                    {
                        text: 'Validators', link: '/essentials/validators'
                    },
                    {
                        text: 'Signals', link: '/essentials/signals'
                    },
                    {
                        text: 'Middleware', link: '/essentials/middleware'
                    }
                ]
            },
            {
                text: 'Advanced', link: '/advanced/',
                items: [
                    {
                        text: 'Models', link: '/advanced/models/', collapsed: true,
                        items: [
                            {text: 'Custom field', link: '/advanced/models/custom-field'}
                        ]
                    }
                ]
            },
            {
                text: 'API reference', link: '/api-reference/',
                items: [
                    {
                        text: 'Model fields', link: '/api-reference/model-fields/', collapsed: true,
                        items: [
                            {text: 'AutoField', link: '/api-reference/model-fields/auto-field'},
                            // {text: 'BigAutoField', link: '/api-reference/model-fields/big-auto-field'},
                            // {text: 'SmallAutoField', link: '/api-reference/model-fields/small-auto-field'},
                            {text: 'BinaryField', link: '/api-reference/model-fields/binary-field'},
                            {text: 'BooleanField', link: '/api-reference/model-fields/boolean-field'},
                            {text: 'CharField', link: '/api-reference/model-fields/char-field'},
                            {text: 'DateField', link: '/api-reference/model-fields/date-field'},
                            {text: 'DateTimeField', link: '/api-reference/model-fields/date-time-field'},
                            {text: 'DecimalField', link: '/api-reference/model-fields/decimal-field'},
                            {text: 'DurationField', link: '/api-reference/model-fields/duration-field'},
                            {text: 'EmailField', link: '/api-reference/model-fields/email-field'},
                            {text: 'FileField', link: '/api-reference/model-fields/file-field'},
                            {text: 'FilePathField', link: '/api-reference/model-fields/file-path-field'},
                            {text: 'FloatField', link: '/api-reference/model-fields/float-field'},
                            {
                                text: 'GenericIPAddressField',
                                link: '/api-reference/model-fields/generic-ip-address-field'
                            },
                            {text: 'ImageField', link: '/api-reference/model-fields/image-field'},
                            {text: 'IntegerField', link: '/api-reference/model-fields/integer-field'},
                            {text: 'JSONField', link: '/api-reference/model-fields/json-field'},
                            {text: 'SlugField', link: '/api-reference/model-fields/slug-field'},
                            {text: 'TextField', link: '/api-reference/model-fields/text-field'},
                            {text: 'TimeField', link: '/api-reference/model-fields/time-field'},
                            {text: 'URLField', link: '/api-reference/model-fields/url-field'},
                            {text: 'UUIDField', link: '/api-reference/model-fields/uuid-field'},
                            {text: 'ForeignKey', link: '/api-reference/model-fields/foreign-key'},
                            {text: 'ManyToManyField', link: '/api-reference/model-fields/many-to-many-field'},
                            {text: 'OneToOneField', link: '/api-reference/model-fields/one-to-one-field'},
                        ]
                    },
                    {
                        text: 'Model field options', link: '/api-reference/model-field-options/', collapsed: true,
                        items: [
                            {text: 'null', link: '/api-reference/model-field-options/null'},
                            {text: 'blank', link: '/api-reference/model-field-options/blank'},
                            {text: 'choices', link: '/api-reference/model-field-options/choices'},
                            {text: 'db_column', link: '/api-reference/model-field-options/db-column'},
                            {text: 'db_comment', link: '/api-reference/model-field-options/db-comment'},
                            {text: 'db_index', link: '/api-reference/model-field-options/db-index'},
                            {text: 'db_tablespace', link: '/api-reference/model-field-options/db-tablespace'},
                            {text: 'default', link: '/api-reference/model-field-options/default'},
                            {text: 'editable', link: '/api-reference/model-field-options/editable'},
                            {text: 'error_messages', link: '/api-reference/model-field-options/error-messages'},
                            {text: 'help_text', link: '/api-reference/model-field-options/help-text'},
                            {text: 'primary_key', link: '/api-reference/model-field-options/primary-key'},
                            {text: 'unique', link: '/api-reference/model-field-options/unique'},
                            {text: 'unique_for_day', link: '/api-reference/model-field-options/unique-for-day'},
                            {text: 'unique_for_month', link: '/api-reference/model-field-options/unique-for-month'},
                            {text: 'unique_for_year', link: '/api-reference/model-field-options/unique-for-year'},
                            {text: 'verbose_name', link: '/api-reference/model-field-options/verbose-name'},
                            {text: 'validators', link: '/api-reference/model-field-options/validators'},
                        ]
                    },
                    {
                        text: 'Model Meta options', link: '/api-reference/model-meta-options/', collapsed: true,
                        items: [
                            {text: 'abstract', link: '/api-reference/model-meta-options/abstract'},
                            {text: 'app_label', link: '/api-reference/model-meta-options/app-label'},
                            {text: 'base_manager_name', link: '/api-reference/model-meta-options/base-manager-name'},
                            {text: 'db_table', link: '/api-reference/model-meta-options/db-table'},
                            {text: 'db_table_comment', link: '/api-reference/model-meta-options/db-table-comment'},
                            {text: 'db_tablespace', link: '/api-reference/model-meta-options/db-tablespace'},
                            {
                                text: 'default_manager_name',
                                link: '/api-reference/model-meta-options/default-manager-name'
                            },
                            {
                                text: 'default_related_name',
                                link: '/api-reference/model-meta-options/default-related-name'
                            },
                            {text: 'get_latest_by', link: '/api-reference/model-meta-options/get-latest-by'},
                            {text: 'managed', link: '/api-reference/model-meta-options/managed'},
                            {
                                text: 'order_with_respect_to',
                                link: '/api-reference/model-meta-options/order-with-respect-to'
                            },
                            {text: 'ordering', link: '/api-reference/model-meta-options/ordering'},
                            {text: 'permissions', link: '/api-reference/model-meta-options/permissions'},
                            {
                                text: 'default_permissions',
                                link: '/api-reference/model-meta-options/default-permissions'
                            },
                            {text: 'proxy', link: '/api-reference/model-meta-options/proxy'},
                            {
                                text: 'required_db_features',
                                link: '/api-reference/model-meta-options/required-db-features'
                            },
                            {text: 'required_db_vendor', link: '/api-reference/model-meta-options/required_db_vendor'},
                            {text: 'select_on_save', link: '/api-reference/model-meta-options/select-on-save'},
                            {text: 'indexes', link: '/api-reference/model-meta-options/indexes'},
                            {text: 'unique_together', link: '/api-reference/model-meta-options/unique-together'},
                            {text: 'index_together', link: '/api-reference/model-meta-options/index-together'},
                            {text: 'constraints', link: '/api-reference/model-meta-options/constraints'},
                            {text: 'verbose_name', link: '/api-reference/model-meta-options/verbose-name'},
                            {
                                text: 'verbose_name_plural',
                                link: '/api-reference/model-meta-options/verbose-name-plural'
                            },
                            {text: 'label', link: '/api-reference/model-meta-options/label'},
                            {text: 'label_lower', link: '/api-reference/model-meta-options/label-lower'},
                        ]
                    },
                    {
                        text: 'QuerySet methods', link: '/api-reference/queryset-methods/', collapsed: true,
                        items: [
                            {text: 'all', link: '/api-reference/queryset-methods/all'},
                            {text: 'filter', link: '/api-reference/queryset-methods/filter'},
                            {text: 'exclude', link: '/api-reference/queryset-methods/exclude'},
                            {text: 'annotate', link: '/api-reference/queryset-methods/annotate'},
                            {text: 'alias', link: '/api-reference/queryset-methods/alias'},
                            {text: 'order_by', link: '/api-reference/queryset-methods/order-by'},
                            {text: 'reverse', link: '/api-reference/queryset-methods/reverse'},
                            {text: 'distinct', link: '/api-reference/queryset-methods/distinct'},
                            {text: 'values', link: '/api-reference/queryset-methods/values'},
                            {text: 'values_list', link: '/api-reference/queryset-methods/values-list'},
                            {text: 'dates', link: '/api-reference/queryset-methods/dates'},
                            {text: 'datetimes', link: '/api-reference/queryset-methods/datetimes'},
                            {text: 'none', link: '/api-reference/queryset-methods/none'},
                            {text: 'union', link: '/api-reference/queryset-methods/union'},
                            {text: 'intersection', link: '/api-reference/queryset-methods/intersection'},
                            {text: 'difference', link: '/api-reference/queryset-methods/difference'},
                            {text: 'select_related', link: '/api-reference/queryset-methods/select-related'},
                            {text: 'prefetch_related', link: '/api-reference/queryset-methods/prefetch-related'},
                            {text: 'extra', link: '/api-reference/queryset-methods/extra'},
                            {text: 'defer', link: '/api-reference/queryset-methods/defer'},
                            {text: 'only', link: '/api-reference/queryset-methods/only'},
                            {text: 'using', link: '/api-reference/queryset-methods/using'},
                            {text: 'select_for_update', link: '/api-reference/queryset-methods/select-for-update'},
                            {text: 'raw', link: '/api-reference/queryset-methods/raw'},
                            {text: 'get', link: '/api-reference/queryset-methods/get'},
                            {text: 'create', link: '/api-reference/queryset-methods/create'},
                            {text: 'get_or_create', link: '/api-reference/queryset-methods/get-or-create'},
                            {text: 'update_or_create', link: '/api-reference/queryset-methods/update-or-create'},
                            {text: 'bulk_create', link: '/api-reference/queryset-methods/bulk-create'},
                            {text: 'bulk_update', link: '/api-reference/queryset-methods/bulk-update'},
                            {text: 'count', link: '/api-reference/queryset-methods/count'},
                            {text: 'in_bulk', link: '/api-reference/queryset-methods/in-bulk'},
                            {text: 'iterator', link: '/api-reference/queryset-methods/iterator'},
                            {text: 'latest', link: '/api-reference/queryset-methods/latest'},
                            {text: 'earliest', link: '/api-reference/queryset-methods/earliest'},
                            {text: 'first', link: '/api-reference/queryset-methods/first'},
                            {text: 'last', link: '/api-reference/queryset-methods/last'},
                            {text: 'aggregate', link: '/api-reference/queryset-methods/aggregate'},
                            {text: 'exists', link: '/api-reference/queryset-methods/exists'},
                            {text: 'contains', link: '/api-reference/queryset-methods/contains'},
                            {text: 'update', link: '/api-reference/queryset-methods/update'},
                            {text: 'delete', link: '/api-reference/queryset-methods/delete'},
                            {text: 'as_manager', link: '/api-reference/queryset-methods/as-manager'},
                            {text: 'explain', link: '/api-reference/queryset-methods/explain'},
                        ]
                    },
                    {
                        text: 'QuerySet field lookups', link: '/api-reference/queryset-field-lookups/', collapsed: true,
                        items: [
                            {text: 'exact', link: '/api-reference/queryset-field-lookups/exact'},
                            {text: 'iexact', link: '/api-reference/queryset-field-lookups/iexact'},
                            {text: 'contains', link: '/api-reference/queryset-field-lookups/contains'},
                            {text: 'icontains', link: '/api-reference/queryset-field-lookups/icontains'},
                            {text: 'in', link: '/api-reference/queryset-field-lookups/in'},
                            {text: 'gt', link: '/api-reference/queryset-field-lookups/gt'},
                            {text: 'gte', link: '/api-reference/queryset-field-lookups/gte'},
                            {text: 'lt', link: '/api-reference/queryset-field-lookups/lt'},
                            {text: 'lte', link: '/api-reference/queryset-field-lookups/lte'},
                            {text: 'startswith', link: '/api-reference/queryset-field-lookups/startswith'},
                            {text: 'istartswith', link: '/api-reference/queryset-field-lookups/istartswith'},
                            {text: 'endswith', link: '/api-reference/queryset-field-lookups/endswith'},
                            {text: 'iendswith', link: '/api-reference/queryset-field-lookups/iendswith'},
                            {text: 'range', link: '/api-reference/queryset-field-lookups/range'},
                            {text: 'date', link: '/api-reference/queryset-field-lookups/date'},
                            {text: 'year', link: '/api-reference/queryset-field-lookups/year'},
                            {text: 'iso_year', link: '/api-reference/queryset-field-lookups/iso-year'},
                            {text: 'month', link: '/api-reference/queryset-field-lookups/month'},
                            {text: 'day', link: '/api-reference/queryset-field-lookups/day'},
                            {text: 'week', link: '/api-reference/queryset-field-lookups/week'},
                            {text: 'week_day', link: '/api-reference/queryset-field-lookups/week-day'},
                            {text: 'iso_week_day', link: '/api-reference/queryset-field-lookups/iso-week-day'},
                            {text: 'quarter', link: '/api-reference/queryset-field-lookups/quarter'},
                            {text: 'time', link: '/api-reference/queryset-field-lookups/time'},
                            {text: 'hour', link: '/api-reference/queryset-field-lookups/hour'},
                            {text: 'minute', link: '/api-reference/queryset-field-lookups/minute'},
                            {text: 'second', link: '/api-reference/queryset-field-lookups/second'},
                            {text: 'isnull', link: '/api-reference/queryset-field-lookups/isnull'},
                            {text: 'regex', link: '/api-reference/queryset-field-lookups/regex'},
                            {text: 'iregex', link: '/api-reference/queryset-field-lookups/iregex'},
                        ]
                    },
                    {
                        text: 'QuerySet aggregation functions',
                        link: '/api-reference/queryset-aggregation-functions/',
                        collapsed: true,
                        items: [
                            {text: 'Avg', link: '/api-reference/queryset-aggregation-functions/avg'},
                            {text: 'Count', link: '/api-reference/queryset-aggregation-functions/count'},
                            {text: 'Max', link: '/api-reference/queryset-aggregation-functions/max'},
                            {text: 'StdDev', link: '/api-reference/queryset-aggregation-functions/std-dev'},
                            {text: 'Sum', link: '/api-reference/queryset-aggregation-functions/sum'},
                            {text: 'Variance', link: '/api-reference/queryset-aggregation-functions/variance'},
                        ]
                    },
                    {
                        text: 'QuerySet others', link: '/api-reference/queryset-others/', collapsed: true,
                        items: [
                            {text: 'AND', link: '/api-reference/queryset-others/and'},
                            {text: 'OR', link: '/api-reference/queryset-others/xor'},
                            {text: 'XOR', link: '/api-reference/queryset-others/or'},
                            {text: 'Q', link: '/api-reference/queryset-others/q'},
                            {text: 'Prefetch', link: '/api-reference/queryset-others/prefetch'},
                            {
                                text: 'prefetch_related_objects',
                                link: '/api-reference/queryset-others/prefetch-related-objects'
                            },
                            {text: 'FilteredRelation', link: '/api-reference/queryset-others/filtered-relation'},
                            {text: 'F', link: '/api-reference/queryset-others/f'},
                            {text: 'Func', link: '/api-reference/queryset-others/func'},
                            {text: 'Aggregate', link: '/api-reference/queryset-others/aggregate'},
                            {text: 'Value', link: '/api-reference/queryset-others/value'},
                            {text: 'ExpressionWrapper', link: '/api-reference/queryset-others/expression-wrapper'},
                            {text: 'Subquery', link: '/api-reference/queryset-others/subquery'},
                            {text: 'Exists', link: '/api-reference/queryset-others/exists'},
                            {text: 'Cast', link: '/api-reference/queryset-others/cast'},
                            {text: 'Coalesce', link: '/api-reference/queryset-others/coalesce'},
                            {text: 'Collate', link: '/api-reference/queryset-others/collate'},
                            {text: 'Greatest', link: '/api-reference/queryset-others/greatest'},
                            {text: 'JSONObject', link: '/api-reference/queryset-others/json-object'},
                            {text: 'Least', link: '/api-reference/queryset-others/least'},
                            {text: 'NullIf', link: '/api-reference/queryset-others/null-if'},
                            {text: 'Extract', link: '/api-reference/queryset-others/extract'},
                            {text: 'Now', link: '/api-reference/queryset-others/now'},
                            {text: 'Trunc', link: '/api-reference/queryset-others/trunc'},
                            // https://docs.djangoproject.com/en/4.2/ref/models/database-functions
                        ]
                    },
                    {
                        text: 'View HttpRequest attributes',
                        link: '/api-reference/view-http-request-attributes/',
                        collapsed: true,
                        items: [
                            {text: 'scheme', link: '/api-reference/views-http-request-attributes/scheme'},
                            {text: 'body', link: '/api-reference/views-http-request-attributes/body'},
                            {text: 'path', link: '/api-reference/views-http-request-attributes/path'},
                            {text: 'path_info', link: '/api-reference/views-http-request-attributes/path-info'},
                            {text: 'method', link: '/api-reference/views-http-request-attributes/method'},
                            {text: 'encoding', link: '/api-reference/views-http-request-attributes/encoding'},
                            {text: 'content_type', link: '/api-reference/views-http-request-attributes/content-type'},
                            {
                                text: 'content_params',
                                link: '/api-reference/views-http-request-attributes/content-params'
                            },
                            {text: 'GET', link: '/api-reference/views-http-request-attributes/get'},
                            {text: 'POST', link: '/api-reference/views-http-request-attributes/post'},
                            {text: 'COOKIES', link: '/api-reference/views-http-request-attributes/cookies'},
                            {text: 'FILES', link: '/api-reference/views-http-request-attributes/files'},
                            {text: 'META', link: '/api-reference/views-http-request-attributes/meta'},
                            {text: 'headers', link: '/api-reference/views-http-request-attributes/headers'},
                            {
                                text: 'resolver_match',
                                link: '/api-reference/views-http-request-attributes/resolver-match'
                            },
                            {text: 'current_app', link: '/api-reference/views-http-request-attributes/current-app'},
                            {text: 'urlconf', link: '/api-reference/views-http-request-attributes/urlconf'},
                            {
                                text: 'exception_reporter_filter',
                                link: '/api-reference/views-http-request-attributes/exception-reporter-filter'
                            },
                            {
                                text: 'exception_reporter_class',
                                link: '/api-reference/views-http-request-attributes/exception-reporter-class'
                            },
                            {text: 'session', link: '/api-reference/views-http-request-attributes/session'},
                            {text: 'site', link: '/api-reference/views-http-request-attributes/site'},
                            {text: 'user', link: '/api-reference/views-http-request-attributes/user'},
                        ]
                    },
                    {
                        text: 'View HttpRequest methods',
                        link: '/api-reference/view-http-request-methods/',
                        collapsed: true,
                        items: [
                            {text: 'get_host()', link: '/api-reference/views-http-request-methods/get-host'},
                            {text: 'get_port()', link: '/api-reference/views-http-request-methods/get-port'},
                            {text: 'get_full_path()', link: '/api-reference/views-http-request-methods/get-full-path'},
                            {
                                text: 'get_full_path_info()',
                                link: '/api-reference/views-http-request-methods/get-full-path-info'
                            },
                            {
                                text: 'build_absolute_uri()',
                                link: '/api-reference/views-http-request-methods/build-absolute-uri'
                            },
                            {
                                text: 'get_signed_cookie()',
                                link: '/api-reference/views-http-request-methods/get-signed-cookie'
                            },
                            {text: 'is_secure()', link: '/api-reference/views-http-request-methods/is-secure'},
                            {text: 'accepts()', link: '/api-reference/views-http-request-methods/accepts'},
                            {text: 'read()', link: '/api-reference/views-http-request-methods/read'},
                            {text: 'readline()', link: '/api-reference/views-http-request-methods/readline'},
                            {text: 'readlines()', link: '/api-reference/views-http-request-methods/readlines'},
                            {text: '__iter__()', link: '/api-reference/views-http-request-methods/__iter__'},
                        ]
                    },
                    {
                        text: 'View decorators', link: '/api-reference/view-decorators/', collapsed: true,
                        items: [
                            {text: 'require_http_methods', link: '/api-reference/view-decorators/require-http-methods'},
                            {text: 'login_required', link: '/api-reference/view-decorators/login-required'},
                        ]
                    },
                    {
                        text: 'View generics', link: '/api-reference/view-generics/', collapsed: true,
                        items: [
                            {text: 'TemplateView', link: '/api-reference/view-generics/template-view'},
                            {text: 'RedirectView', link: '/api-reference/view-generics/redirect-view'},
                            {text: 'DetailView', link: '/api-reference/view-generics/detail-view'},
                            {text: 'ListView', link: '/api-reference/view-generics/list-view'},
                            {text: 'FormView', link: '/api-reference/view-generics/form-view'},
                            {text: 'CreateView', link: '/api-reference/view-generics/create-view'},
                            {text: 'UpdateView', link: '/api-reference/view-generics/update-view'},
                            {text: 'DeleteView', link: '/api-reference/view-generics/delete-view'},
                            {text: 'ArchiveIndexView', link: '/api-reference/view-generics/archive-index-view'},
                            {text: 'YearArchiveView', link: '/api-reference/view-generics/year-archive-view'},
                            {text: 'MonthArchiveView', link: '/api-reference/view-generics/month-archive-view'},
                            {text: 'WeekArchiveView', link: '/api-reference/view-generics/week-archive-view'},
                            {text: 'DayArchiveView', link: '/api-reference/view-generics/day-archive-view'},
                            {text: 'TodayArchiveView', link: '/api-reference/view-generics/today-archive-view'},
                            {text: 'DateDetailView', link: '/api-reference/view-generics/date-detail-view'},
                        ]
                    },
                    {
                        text: 'Validators', link: '/api-reference/validators/', collapsed: true,
                        items: [
                            {text: 'RegexValidator', link: '/api-reference/validators/regex-validator'},
                            {text: 'EmailValidator', link: '/api-reference/validators/email-validator'},
                            {text: 'URLValidator', link: '/api-reference/validators/url-validator'},
                            {text: 'validate_email', link: '/api-reference/validators/validate-email'},
                            {text: 'validate_slug', link: '/api-reference/validators/validate-slug'},
                            {text: 'validate_slug', link: '/api-reference/validators/validate-slug'},
                            {text: 'validate_unicode_slug', link: '/api-reference/validators/validate-unicode-slug'},
                            {text: 'validate_ipv4_address', link: '/api-reference/validators/validate-ipv4-address'},
                            {text: 'validate_ipv6_address', link: '/api-reference/validators/validate-ipv6-address'},
                            {text: 'validate_ipv46_address', link: '/api-reference/validators/validate-ipv46-address'},
                            {
                                text: 'validate_comma_separated_integer_list',
                                link: '/api-reference/validators/validate-comma-separated-integer-list'
                            },
                            {text: 'int_list_validator', link: '/api-reference/validators/int-list-validator'},
                            {text: 'MaxValueValidator', link: '/api-reference/validators/max-value-validator'},
                            {text: 'MinValueValidator', link: '/api-reference/validators/min-value-validator'},
                            {text: 'MaxLengthValidator', link: '/api-reference/validators/max-length-validator'},
                            {text: 'MinLengthValidator', link: '/api-reference/validators/min-length-validator'},
                            {text: 'DecimalValidator', link: '/api-reference/validators/decimal-validator'},
                            {
                                text: 'FileExtensionValidator',
                                link: '/api-reference/validators/file-extension-validator'
                            },
                            {
                                text: 'validate_image_file_extension',
                                link: '/api-reference/validators/validate-image-file-extension'
                            },
                            {
                                text: 'ProhibitNullCharactersValidator',
                                link: '/api-reference/validators/prohibit-null-characters-validator'
                            },
                            {text: 'StepValueValidator', link: '/api-reference/validators/step-value-validator'},
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/documentation-uz/django'}
        ]
    }
})
