// Copyright Dirk Lemstra https://github.com/dlemstra/magick-wasm.
// Licensed under the Apache License, Version 2.0.

import { Kernel } from '../../src/kernel';
import { MorphologyMethod } from '../../src/morphology-method';
import { MorphologySettings } from '../../src/settings/morphology-settings';
import { TestImages } from '../test-images';

describe('MagickImage#morphology', () => {
    it('should apply the kernel with the specified method', () => {
        TestImages.Builtin.logo.use(image => {
            const settings = new MorphologySettings(MorphologyMethod.Dilate, Kernel.Octagon);
            settings.iterations = 3;
            image.morphology(settings);

            expect(image).toHavePixelWithColor(300, 215, '#f79868ff');
            expect(image).toHavePixelWithColor(420, 180, '#f5ee92ff');
            expect(image).toHavePixelWithColor(405, 435, '#ed3e92ff');
        });
    });

    it('should use the kernel arguments', () => {
        TestImages.Builtin.logo.use(image => {
            const settings = new MorphologySettings(MorphologyMethod.Dilate, Kernel.Disk, '5.3');
            image.morphology(settings);

            expect(image).toHavePixelWithColor(300, 215, '#f79868ff');
            expect(image).toHavePixelWithColor(420, 180, '#f5ee92ff');
            expect(image).toHavePixelWithColor(405, 435, '#513e92ff');
        });
    });

    it('should support kernel as a string', () => {
        TestImages.Builtin.logo.use(image => {
            const settings = new MorphologySettings(MorphologyMethod.Dilate, 'Disk');
            image.morphology(settings);

            expect(image).toHavePixelWithColor(300, 215, '#f79868ff');
            expect(image).toHavePixelWithColor(420, 180, '#f5ee92ff');
            expect(image).toHavePixelWithColor(405, 435, '#223e92ff');
        });
    });
});
