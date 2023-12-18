import React from "react";
const CarouselDescLink = ({dataCarouselElement }) => {
    return (
        React.createElement('div', {
                className: 'container__carousel--desc--link',
                key: `container__carousel--link`
            }, React.createElement('a', {
                    href: dataCarouselElement.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                }, React.createElement('div', {
                        className: 'containerLink s1',
                        key: `container__carousel--link`,
                    }, dataCarouselElement.title)
            ), React.createElement('a', {
                    href: dataCarouselElement.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                }, React.createElement('div', {
                        className: 'containerLink s2',
                        key: `container__carousel--link-${dataCarouselElement.id}`,
                    }, dataCarouselElement.title)
            )
        )
    )
}
export default CarouselDescLink;