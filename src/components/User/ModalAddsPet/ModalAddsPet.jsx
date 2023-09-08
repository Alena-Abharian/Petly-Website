import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-date-picker';
import { showAlertMessage } from '../../../utils/showMessages';
import { addPet } from '../../../redux/auth/authOperations';
import imgLoad from '../../../assets/images/Modal/loadMobile.png';
import iconClose from '../../../assets/icons/icon-close.svg';
import celendar from '../../../assets/icons/calendar.svg';

import {
  Backdrop,
  Modal,
  BtnClose,
  Label,
  Input,
  LabelLoad,
  Textarea,
  ImgClose,
  BlockOfButtons,
  Button,
  AccentBtn,
  ThumbLoadImg,
  Title,
  Error,
  Descr,
  LoadImage,
  InputLoad,
} from './ModalAddsPet.styled';
// import { useSelect } from '@mui/base';

const modalContainer = document.getElementById('modal-root');

const ModalAddsPet = ({ setShowModal }) => {
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) setShowModal(false);
  };

  const onBtnCloseClick = () => {
    setShowModal(false);
  };

  const onPageChange = () => {
    if (page === 1) {
      if (name === '' || breed === '') {
        showAlertMessage('Fill out all fields');
        return;
      }

      if (nameError || breedError) {
        showAlertMessage('Fill out all fields correctly');
        return;
      }

      setPage(2);
      return;
    }
    setPage(1);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      birthday: new Date(),
      breed: '',
      comments: '',
      avatar: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'validation.min')
        .max(16, 'validation.namePetMax')
        .required('validation.required'),
      breed: Yup.string()
        .min(2, 'validation.min')
        .max(24, 'validation.max')
        .required('validation.required'),
      comments: Yup.string()
        .min(8, 'validation.commentsMin')
        .max(120, 'validation.commentsMax'),
    }),
  });

  const { avatar, name, birthday, breed, comments } = formik.values;

  const {
    name: nameError,
    breed: breedError,
    comments: commentsError,
  } = formik.errors;

  useEffect(() => {
    if (!avatar) {
      return;
    }

    /* Создаем виртуальную ссылку на загруженный файл */
    const objectUrl = URL.createObjectURL(avatar);
    setPhoto(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [avatar]);

  const onFormSubmit = async e => {
    e.preventDefault();

    if (commentsError) {
      showAlertMessage('errors.notRightComments');
      return;
    }

    const toDateFormat = (data, from, to) => {
      return new Date(data)
        .toLocaleString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replaceAll(from, to);
    };

    const arrayOfData = Object.entries({
      name,
      birthday: toDateFormat(birthday, '/', '.'),
      breed,
      comments,
      avatar,
    });

    const filteredArray = arrayOfData.filter(item => item[1]);
    const info = filteredArray.reduce((previousValue, feature) => {
      return { ...previousValue, [feature[0]]: feature[1] };
    }, {});

    dispatch(addPet(info));
    setShowModal(false);
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <BtnClose type="button" onClick={onBtnCloseClick}>
          <ImgClose src={iconClose} alt="" />
        </BtnClose>
        <form onSubmit={onFormSubmit}>
          {page === 1 && (
            <>
              <Title>Add pet</Title>
              <Label forhtml="name">Name pet</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder={'Type name pet'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={name}
              />
              <Error>{formik.touched.name && nameError && nameError}</Error>
              <Label forhtml="birthday">Date of birth</Label>
              <Input as={'div'}>
                <DatePicker
                  clearIcon={null}
                  calendarIcon={<ImgClose src={celendar} alt="" />}
                  format="dd.MM.yyyy"
                  selected={birthday}
                  maxDate={new Date()}
                  yearPlaceholder={'years'}
                  monthPlaceholder={'months'}
                  dayPlaceholder={'days'}
                  id="birthday"
                  name="birthday"
                  value={birthday}
                  onChange={value => {
                    if (!value) {
                      return;
                    }
                    formik.setFieldValue(
                      'birthday',
                      new Date(Date.parse(value))
                    );
                  }}
                />
              </Input>
              <Error>{formik.touched.name && nameError && nameError}</Error>
              <Label forhtml="breed">Breed</Label>
              <Input
                type="text"
                name="breed"
                id="breed"
                placeholder={'Type breed'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={breed}
              />
              <Error>{formik.touched.breed && breedError && breedError}</Error>
              <BlockOfButtons>
                <Button type="button" onClick={onBtnCloseClick}>
                  Cancel
                </Button>
                <AccentBtn type="button" onClick={onPageChange}>
                  Next
                </AccentBtn>
              </BlockOfButtons>
            </>
          )}
          {page === 2 && (
            <>
              <Title>Add pet</Title>
              <Descr>Add photo and some comments</Descr>
              <div>
                <LabelLoad forhtml="file">
                  {!photo && (
                    <ImgClose
                      src={imgLoad}
                      alt="add_photo"
                      width="71"
                      height="71"
                    />
                  )}
                  {photo && (
                    <ThumbLoadImg>
                      <LoadImage src={photo} alt="pet_photo" />
                    </ThumbLoadImg>
                  )}
                  <InputLoad
                    id="file"
                    name="avatar"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={event => {
                      formik.setFieldValue(
                        'avatar',
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                </LabelLoad>
              </div>
              <Label forhtml="comments">Comments</Label>
              <Textarea
                name="comments"
                id="comments"
                placeholder={'Type comments'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={comments}
              ></Textarea>
              <Error>
                {formik.touched.comments && commentsError && commentsError}
              </Error>
              <BlockOfButtons>
                <Button type="button" onClick={onPageChange}>
                  Back
                </Button>
                <AccentBtn type="submit">Done</AccentBtn>
              </BlockOfButtons>
            </>
          )}
        </form>
      </Modal>
    </Backdrop>,
    modalContainer
  );
};

export default ModalAddsPet;
