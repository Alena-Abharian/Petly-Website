import { Text, AuthLink, LinksWrapper } from '../LoginForm.styled';

export default function Links({ onRestore, showRestore }) {
  return (
    <LinksWrapper>
      {showRestore ? (
        ''
      ) : (
        <Text>
          Don't have an account? <AuthLink to="/register">Register</AuthLink>
        </Text>
      )}
      {showRestore ? (
        <Text>
          Back to{' '}
          <AuthLink onClick={onRestore} to="/login">
            Login?
          </AuthLink>
        </Text>
      ) : (
        <Text>
          Forgot password?{' '}
          <AuthLink onClick={onRestore} to={'/restore'}>
            Restore
          </AuthLink>
        </Text>
      )}
    </LinksWrapper>
  );
}
