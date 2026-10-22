(function (blocks, element, blockEditor, components) {
    const el = element.createElement;
    const Fragment = element.Fragment;
    const {
        InspectorControls,
        RichText
    } = blockEditor;
    const {
        PanelBody,
        TextControl,
        TextareaControl
    } = components;

    function renderAwards(attributes) {
        return [
            {
                title: attributes.awardOneTitle,
                text: attributes.awardOneText
            },
            {
                title: attributes.awardTwoTitle,
                text: attributes.awardTwoText
            },
            {
                title: attributes.awardThreeTitle,
                text: attributes.awardThreeText
            }
        ].map(function (award, index) {
            return el(
                'div',
                {
                    className: 'nur-hero__award',
                    key: index
                },
                el('strong', { className: 'nur-hero__award-title' }, award.title),
                el('p', { className: 'nur-hero__award-text' }, award.text)
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
                            title: 'Konten NUR Hero',
                            initialOpen: true
                        },
                        el(TextControl, {
                            label: 'URL gambar',
                            value: attributes.imageUrl,
                            onChange: function (value) {
                                setAttributes({ imageUrl: value });
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
                            label: 'Judul penghargaan 1',
                            value: attributes.awardOneTitle,
                            onChange: function (value) {
                                setAttributes({ awardOneTitle: value });
                            }
                        }),
                        el(TextareaControl, {
                            label: 'Keterangan penghargaan 1',
                            value: attributes.awardOneText,
                            onChange: function (value) {
                                setAttributes({ awardOneText: value });
                            }
                        }),
                        el(TextControl, {
                            label: 'Judul penghargaan 2',
                            value: attributes.awardTwoTitle,
                            onChange: function (value) {
                                setAttributes({ awardTwoTitle: value });
                            }
                        }),
                        el(TextareaControl, {
                            label: 'Keterangan penghargaan 2',
                            value: attributes.awardTwoText,
                            onChange: function (value) {
                                setAttributes({ awardTwoText: value });
                            }
                        }),
                        el(TextControl, {
                            label: 'Judul penghargaan 3',
                            value: attributes.awardThreeTitle,
                            onChange: function (value) {
                                setAttributes({ awardThreeTitle: value });
                            }
                        }),
                        el(TextareaControl, {
                            label: 'Keterangan penghargaan 3',
                            value: attributes.awardThreeText,
                            onChange: function (value) {
                                setAttributes({ awardThreeText: value });
                            }
                        })
                    )
                ),
                el(
                    'section',
                    { className: 'nur-hero' },
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
                            renderAwards(attributes)
                        )
                    )
                )
            );
        },
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
                        renderAwards(attributes)
                    )
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
