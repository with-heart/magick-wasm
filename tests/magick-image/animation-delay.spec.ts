// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

import { TestImages } from '../test-images';

describe('MagickImage#animationDelay', () => {
    it('should return the animation delay', () => {
        TestImages.empty.use(image => {
            expect(image.animationDelay).toBe(0);
        });
    });

    it('should change the animation delay', () => {
        TestImages.empty.use(image => {
            image.animationDelay = 10;
            expect(image.animationDelay).toBe(10);
        });
    });
});
