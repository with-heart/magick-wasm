// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

import { Gravity } from '../../src/gravity';
import { MagickColors } from '../../src/magick-colors';
import { MagickGeometry } from '../../src/magick-geometry';
import { TestImages } from '../test-images';

describe('MagickImage#crop', () => {
    it('should crop the image', () => {
        TestImages.Color.black.use(image => {
            image.extent(new MagickGeometry('3x3'), Gravity.Center, MagickColors.White);

            image.crop(1, 1);

            expect(image.width).toBe(1);
            expect(image.height).toBe(1);
            expect(image).toHavePixelWithColor(0, 0, '#ffffffff');
        });
    });

    it('should crop the image with the specified gravity', () => {
        TestImages.Color.black.use(image => {
            image.extent(new MagickGeometry('3x3'), Gravity.Center, MagickColors.White);

            image.crop(1, 1, Gravity.Center);

            expect(image.width).toBe(1);
            expect(image.height).toBe(1);
            expect(image).toHavePixelWithColor(0, 0, '#000000ff');
        });
    });

    it('should crop the image with the specified geometry', () => {
        TestImages.Color.black.use(image => {
            image.extent(new MagickGeometry('3x3'), Gravity.Center, MagickColors.White);

            image.crop(new MagickGeometry('2x2'));

            expect(image.width).toBe(2);
            expect(image.height).toBe(2);
            expect(image).toHavePixelWithColor(0, 0, '#ffffffff');
            expect(image).toHavePixelWithColor(1, 1, '#000000ff');
        });
    });

    it('should crop the image with the specified geometry and gravity', () => {
        TestImages.Color.black.use(image => {
            image.extent(new MagickGeometry('3x3'), Gravity.Center, MagickColors.White);

            image.crop(new MagickGeometry('2x2'), Gravity.Southeast);

            expect(image.width).toBe(2);
            expect(image.height).toBe(2);
            expect(image).toHavePixelWithColor(0, 0, '#000000ff');
            expect(image).toHavePixelWithColor(1, 1, '#ffffffff');
        });
    });
});
