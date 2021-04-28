#! bin/python


def strip_form(form):
    s_form = {}
    for key in form:
        if type(key) is str:
            s_key = key.strip()
        else:
            s_key = key
        if type(form[key]) is str:
            s_val = form[key].strip()
        else:
            s_val = form[key]
        s_form[s_key] = s_val
    return s_form



def validate_log(form):
    valid = {
        'login': lambda put: type(put) is str and len(put) <= 25 and len(put) >= 1 and " " not in put,
        'password': lambda put: type(put) is str and len(put) <= 50 and len(put) >= 1
    }
    for key in valid:
        if not key in form:
            return False
        if not valid[key](form[key]):
            return False
    return True
