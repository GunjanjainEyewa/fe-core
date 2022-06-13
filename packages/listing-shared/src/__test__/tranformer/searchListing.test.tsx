import { transformSearchListingData } from '../../search/store/transformer';

const didYouMeanRawData = {
    did_you_mean: {
        original_word: 'Sampu',
        dym_word: 'Shampoo',
    }
};

const inValidRawData = {
    did_you_mean: []
};

const validOutput = {
    didYouMean: 'Shampoo',
    searchTerm: 'Sampu'
}

const didYouMeanOutput = {
    didYouMean: '',
    searchTerm: ''
}

describe('Search transformedData', () => {
    test('should have didYouMean object', async () => {
        return transformSearchListingData(didYouMeanRawData).then((data) => {
            expect(data.didYouMean).toEqual(validOutput);
        })
    })
    test('should return empty string if did you mean response is invalid', async () => {
        return transformSearchListingData(inValidRawData).then((data) => {
            expect(data.didYouMean).toEqual(didYouMeanOutput);
        })
    })
});
