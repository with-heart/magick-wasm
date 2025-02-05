// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

import { TestImages } from '../test-images';

describe('MagickImage#animationIterations', () => {
    it('should return the animation iterations', () => {
        TestImages.empty.use(image => {
            expect(image.animationIterations).toBe(0);
        });
    });

    it('should change the animation iterations', () => {
        TestImages.empty.use(image => {
            image.animationIterations = 10;
            expect(image.animationIterations).toBe(10);
        });
    });
});
