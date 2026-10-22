(function (blocks, element, blockEditor, components) {
    const el = element.createElement;
    const Fragment = element.Fragment;
    const {
        InspectorControls,
        MediaUpload,
        MediaUploadCheck,
        RichText
    } = blockEditor;
    const {
        Button,
        PanelBody,
        TextControl
    } = components;

    const defaultBackgroundUrl =
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80';

    const awardFields = [
        ['awardOneTitle', 'awardOneText'],
        ['awardTwoTitle', 'awardTwoText'],
        ['awardThreeTitle', 'awardThreeText']
    ];

    function getBackgroundStyle(imageUrl) {
        const backgroundUrl = imageUrl || defaultBackgroundUrl;

        return {
            backgroundImage:
                'linear-gradient(90deg, rgba(17, 24, 39, 0.72), rgba(17, 24, 39, 0.24)), url(' +
                JSON.stringify(backgroundUrl) +
                ')'
        };
    }

    function renderAwards(attributes, setAttributes) {
        return awardFields.map(function (fields, index) {
            const titleField = fields[0];
            const textField = fields[1];
            const Title = setAttributes ? RichText : RichText.Content;
            const Text = setAttributes ? RichText : RichText.Content;

            return el(
                'div',
                {
                    className: 'nur-hero__award',
                    key: index
                },
                el(Title, {
                    tagName: 'strong',
                    className: 'nur-hero__award-title',
                    value: attributes[titleField],
                    onChange: setAttributes
                        ? function (value) {
                            const update = {};
                            update[titleField] = value;
                            setAttributes(update);
                        }
                        : undefined,
                    placeholder: 'Judul penghargaan...',
                    allowedFormats: []
                }),
                el(Text, {
                    tagName: 'p',
                    className: 'nur-hero__award-text',
                    value: attributes[textField],
                    onChange: setAttributes
                        ? function (value) {
                            const update = {};
                            update[textField] = value;
                            setAttributes(update);
                        }
                        : undefined,
                    placeholder: 'Keterangan penghargaan...',
                    allowedFormats: []
                })
            );
        });
    }

    function renderLegacyAwards(attributes) {
        return awardFields.map(function (fields, index) {
            return el(
                'div',
                {
                    className: 'nur-hero__award',
                    key: index
                },
                el('strong', { className: 'nur-hero__award-title' }, attributes[fields[0]]),
                el('p', { className: 'nur-hero__award-text' }, attributes[fields[1]])
            );
        });
    }

    blocks.registerBlockType('nur/test', {
        edit: function (props) {
            const { attributes, setAttributes } = props;

            return el(
                Fragment,
                {},
                el(
                    InspectorControls,
                    {},
                    el(
                        PanelBody,
                        {
                            title: 'Pengaturan NUR Hero',
                            initialOpen: true
                        },
                        el(
                            MediaUploadCheck,
                            {},
                            el(MediaUpload, {
                                onSelect: function (media) {
                                    setAttributes({
                                        imageId: media.id,
                                        imageUrl: media.url
                                    });
                                },
                                allowedTypes: ['image'],
                                value: attributes.imageId,
                                render: function (media) {
                                    return el(
                                        Button,
                                        {
                                            onClick: media.open,
                                            variant: 'secondary'
                                        },
                                        attributes.imageId
                                            ? 'Ganti gambar latar'
                                            : 'Pilih gambar latar'
                                    );
                                }
                            })
                        ),
                        attributes.imageId
                            ? el(
                                Button,
                                {
                                    onClick: function () {
                                        setAttributes({
                                            imageId: 0,
                                            imageUrl: defaultBackgroundUrl
                                        });
                                    },
                                    variant: 'tertiary'
                                },
                                'Gunakan gambar bawaan'
                            )
                            : null,
                        el(TextControl, {
                            label: 'URL gambar latar',
                            value: attributes.imageUrl,
                            onChange: function (value) {
                                setAttributes({
                                    imageId: 0,
                                    imageUrl: value
                                });
                            }
                        }),
                        el(TextControl, {
                            label: 'Teks tombol',
                            value: attributes.buttonText,
                            onChange: function (value) {
                                setAttributes({ buttonText: value });
                            }
                        }),
                        el(TextControl, {
                            label: 'Tautan tombol',
                            value: attributes.buttonUrl,
                            onChange: function (value) {
                                setAttributes({ buttonUrl: value });
                            }
                        })
                    )
                ),
                el(
                    'section',
                    {
                        className: 'nur-hero',
                        style: getBackgroundStyle(attributes.imageUrl)
                    },
                    el(
                        'div',
                        { className: 'nur-hero__content' },
                        el(RichText, {
                            tagName: 'h1',
                            className: 'nur-hero__heading',
                            value: attributes.heading,
                            onChange: function (value) {
                                setAttributes({ heading: value });
                            },
                            placeholder: 'Tulis judul utama...',
                            allowedFormats: []
                        }),
                        el(RichText, {
                            tagName: 'p',
                            className: 'nur-hero__subheading',
                            value: attributes.subheading,
                            onChange: function (value) {
                                setAttributes({ subheading: value });
                            },
                            placeholder: 'Tulis deskripsi pesantren...',
                            allowedFormats: []
                        }),
                        el(RichText, {
                            tagName: 'span',
                            className: 'nur-hero__button',
                            value: attributes.buttonText,
                            onChange: function (value) {
                                setAttributes({ buttonText: value });
                            },
                            placeholder: 'Teks tombol...',
                            allowedFormats: []
                        })
                    ),
                    el(
                        'div',
                        { className: 'nur-hero__awards' },
                        renderAwards(attributes, setAttributes)
                    )
                )
            );
        },
        deprecated: [
            {
                save: function (props) {
                    const { attributes } = props;

                    return el(
                        'section',
                        { className: 'nur-hero' },
                        el(
                            'div',
                            { className: 'nur-hero__content' },
                            el(RichText.Content, {
                                tagName: 'h1',
                                className: 'nur-hero__heading',
                                value: attributes.heading
                            }),
                            el(RichText.Content, {
                                tagName: 'p',
                                className: 'nur-hero__subheading',
                                value: attributes.subheading
                            }),
                            el(
                                'span',
                                { className: 'nur-hero__button' },
                                attributes.buttonText
                            )
                        ),
                        el(
                            'div',
                            { className: 'nur-hero__visual' },
                            el('img', {
                                className: 'nur-hero__image',
                                src: attributes.imageUrl,
                                alt: ''
                            }),
                            el(
                                'div',
                                { className: 'nur-hero__awards' },
                                renderLegacyAwards(attributes)
                            )
                        )
                    );
                }
            }
        ],
        save: function (props) {
            const { attributes } = props;

            return el(
                'section',
                {
                    className: 'nur-hero',
                    style: getBackgroundStyle(attributes.imageUrl)
                },
                el(
                    'div',
                    { className: 'nur-hero__content' },
                    el(RichText.Content, {
                        tagName: 'h1',
                        className: 'nur-hero__heading',
                        value: attributes.heading
                    }),
                    el(RichText.Content, {
                        tagName: 'p',
                        className: 'nur-hero__subheading',
                        value: attributes.subheading
                    }),
                    el(RichText.Content, {
                        tagName: 'a',
                        className: 'nur-hero__button',
                        href: attributes.buttonUrl,
                        value: attributes.buttonText
                    })
                ),
                el(
                    'div',
                    { className: 'nur-hero__awards' },
                    renderAwards(attributes)
                )
            );
        }
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
    window.wp.components
);
