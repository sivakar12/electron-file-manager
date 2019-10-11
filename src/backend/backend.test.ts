import mock from 'mock-fs'
import { getFolderContents } from '.'

const mockFileSystem = {
    'FRIENDS': {
        'Season 1': {
            'S01E01': 'The Pilot',
            'SO1E02': 'The One with the Sonogram at the End',
            'S01E03': 'The One with the Thumb',
            'S01E04': 'The One with George Stephanopoulos',
            'S01E05': '"The One with the East German Laundry Detergent'
        }
    }
}

beforeEach(() => {
    mock(mockFileSystem)
})

afterEach(mock.restore)

test('retrieving folder contents', async done => {
    return getFolderContents('FRIENDS/Season 1')
        .then(files => {
            expect(files).toHaveLength(5)
            const recievedFileNames = files.map(c => c.name)
            const expectedFileNames = Object.keys(mockFileSystem['FRIENDS']['Season 1'])
            expect(new Set(recievedFileNames)).toEqual(new Set(expectedFileNames))
            done()
        })
})