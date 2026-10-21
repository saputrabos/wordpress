(function (blocks, element, blockEditor, components) {

    const el = element.createElement;

    const {
        InspectorControls,
        RichText
    } = blockEditor;

    const {
        PanelBody,
        TextControl,
        RangeControl,
        SelectControl,
        ColorPalette
    } = components;


    blocks.registerBlockType('nur/test', {

        edit: function (props) {

            const {
                attributes,
                setAttributes
            } = props;

            const {
                text,
                textColor,
                backgroundColor,
                fontSize,
                padding,
                alignment
            } = attributes;


            const blockStyle = {
                color: textColor,
                backgroundColor: backgroundColor,
                fontSize: fontSize + 'px',
                padding: padding + 'px',
                textAlign: alignment
            };


            return el(
                element.Fragment,
                {},

                /*
                 * SIDEBAR
                 */
                el(
                    InspectorControls,
                    {},

                    el(
                        PanelBody,
                        {
                            title: 'NUR Test',
                            initialOpen: true
                        },

                        /*
                         * TEXT
                         */
                        el(
                            TextControl,
                            {
                                label: 'Text',
                                value: text,
                                onChange: function (value) {
                                    setAttributes({
                                        text: value
                                    });
                                }
                            }
                        ),

                        /*
                         * TEXT COLOR
                         */
                        el(
                            'div',
                            {
                                className: 'nur-control-group'
                            },

                            el(
                                'p',
                                {
                                    className: 'nur-control-label'
                                },
                                'Text Color'
                            ),

                            el(
                                ColorPalette,
                                {
                                    value: textColor,
                                    onChange: function (value) {

                                        setAttributes({
                                            textColor: value || '#172D4B'
                                        });

                                    }
                                }
                            )
                        ),

                        /*
                         * BACKGROUND
                         */
                        el(
                            'div',
                            {
                                className: 'nur-control-group'
                            },

                            el(
                                'p',
                                {
                                    className: 'nur-control-label'
                                },
                                'Background'
                            ),

                            el(
                                ColorPalette,
                                {
                                    value: backgroundColor,
                                    onChange: function (value) {

                                        setAttributes({
                                            backgroundColor: value || '#F5F9FF'
                                        });

                                    }
                                }
                            )
                        ),

                        /*
                         * FONT SIZE
                         */
                        el(
                            RangeControl,
                            {
                                label: 'Font Size',
                                value: fontSize,
                                min: 10,
                                max: 80,
                                onChange: function (value) {

                                    setAttributes({
                                        fontSize: value || 18
                                    });

                                }
                            }
                        ),

                        /*
                         * PADDING
                         */
                        el(
                            RangeControl,
                            {
                                label: 'Padding',
                                value: padding,
                                min: 0,
                                max: 100,
                                onChange: function (value) {

                                    setAttributes({
                                        padding: value || 0
                                    });

                                }
                            }
                        ),

                        /*
                         * ALIGNMENT
                         */
                        el(
                            SelectControl,
                            {
                                label: 'Alignment',
                                value: alignment,
                                options: [
                                    {
                                        label: 'Left',
                                        value: 'left'
                                    },
                                    {
                                        label: 'Center',
                                        value: 'center'
                                    },
                                    {
                                        label: 'Right',
                                        value: 'right'
                                    }
                                ],
                                onChange: function (value) {

                                    setAttributes({
                                        alignment: value
                                    });

                                }
                            }
                        )

                    )
                ),

                /*
                 * BLOCK DI CANVAS
                 */
                el(
                    'div',
                    {
                        className: 'nur-test-block',
                        style: blockStyle
                    },

                    el(
                        RichText,
                        {
                            tagName: 'div',
                            value: text,
                            onChange: function (value) {

                                setAttributes({
                                    text: value
                                });

                            },
                            placeholder: 'Tulis sesuatu...',
                            allowedFormats: []
                        }
                    )

                )

            );

        },


        save: function (props) {

            const {
                attributes
            } = props;

            const {
                text,
                textColor,
                backgroundColor,
                fontSize,
                padding,
                alignment
            } = attributes;


            const blockStyle = {
                color: textColor,
                backgroundColor: backgroundColor,
                fontSize: fontSize + 'px',
                padding: padding + 'px',
                textAlign: alignment
            };


            return el(
                'div',
                {
                    className: 'nur-test-block',
                    style: blockStyle
                },

                el(
                    RichText.Content,
                    {
                        tagName: 'div',
                        value: text
                    }
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