DEBUG = True
TEMPLATE_DEBUG = True

COMPRESS_AUTO = True
SESSION_COOKIE_SECURE = False

TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.load_template_source',
    'django.template.loaders.app_directories.load_template_source',
)
