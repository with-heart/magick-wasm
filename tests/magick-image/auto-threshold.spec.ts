// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

import { AutoThresholdMethod } from '../../src/auto-threshold-method';
import { MagickColors } from '../../src/magick-colors';
import { TestImages } from '../test-images';

describe('MagickImage#autoThreshold', () => {
    it('should threshold the image', () => {
        TestImages.Builtin.logo.use(image => {
            image.autoThreshold(AutoThresholdMethod.OTSU);

            const histogram = image.histogram();
            expect(histogram.size).toBe(2);
            expect(histogram.get(MagickColors.Black.toString())).toBe(39359);
            expect(histogram.get(MagickColors.White.toString())).toBe(267841);
        });
    });
});
